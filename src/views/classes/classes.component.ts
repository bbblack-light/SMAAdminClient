import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Classes } from 'src/model/buisness/Disciplines';
import { ClassesService } from 'src/services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public displayedColumns: string[] = ['Выбрать', '№', 'Название', 'Описание'];
  public classes: Classes [] = [];
  public filteredClasses: Classes [] = []
  public filterString: string = "";
  @ViewChild(MatTable) table: MatTable<Classes>;
  constructor(
    public router: Router,
    private classesService: ClassesService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load() {
    this.classesService.getAll().subscribe(res => {
      this.setClasses(res);
    });
  }

  public update(clas : Classes) {
    if (clas === undefined || clas == null) {
      this.router.navigate(['/classes/0']);
    }
    else {
      this.router.navigate(['/classes/' + clas.id]);
    }
  }

  async deleteD(clas : Classes) { 
    this.classesService.delete(clas.id).subscribe(deleted => {
      this.setClasses(this.classes.filter(x=> x.id != clas.id));
    })
  }

  setClasses(clas : Classes []) {
    this.classes = clas;
    this.filteredClasses = this.classes.filter(c => 
      this.filterString == "" ||
      c.name.includes(this.filterString) ||
      c.description.includes(this.filterString) ||
      c.disciplines.some(d => 
        d.name.includes(this.filterString) ||
        d.description.includes(this.filterString)))
  }
}
