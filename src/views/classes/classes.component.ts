import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from 'src/model/buisness/Disciplines';
import { ClassesService } from 'src/services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public classes: Classes [] = [];
  public filteredClasses: Classes [] = []
  public filterString: string = "";
  constructor(
    public router: Router,
    private classesService: ClassesService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load() {
    this.classesService.getAll().subscribe(res => {
      this.classes = res;
      this.filterClasses();
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
      this.classes = this.classes.filter(x=> x.id != clas.id)
      this.filterClasses();
    })
  }

  filterClasses() {
    this.filteredClasses = this.classes.filter(c => 
      this.filterString == "" ||
      c.name.includes(this.filterString) ||
      c.description.includes(this.filterString) ||
      c.disciplines.some(d => 
        d.name.toLowerCase().includes(this.filterString) ||
        d.description.toLowerCase().includes(this.filterString)))
  }
}
