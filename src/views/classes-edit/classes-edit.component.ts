import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classes, Disciplines } from 'src/model/buisness/Disciplines';
import { ClassesService } from 'src/services/classes.service';
import { DisciplineService } from 'src/services/disciplines.service';

@Component({
  selector: 'app-classes-edit',
  templateUrl: './classes-edit.component.html',
  styleUrls: ['./classes-edit.component.scss']
})
export class ClassesEditComponent implements OnInit {
  public disciplines : Disciplines [];
  public clas : Classes = new Classes(null, "", "", []);
  public id : number;
  public disciplinesControl = new FormControl([]);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private disciplinesService: DisciplineService,
    private classService: ClassesService) {     
  }

  ngOnInit(): void {
    this.disciplinesService.getAll().subscribe(res => {
      this.disciplines = res;

      this.id = this.route.snapshot.params['id'];
      if (this.id != 0){
        this.classService.get(this.id).subscribe(res => {
          this.clas = res;
          this.disciplinesControl.setValue(this.disciplines.filter(d=> res.disciplines.some(rd => rd.id === d.id)));
          console.log(this.disciplinesControl.value);
        });
      }
    });
  }

  setClass(clas) {
    this.clas = clas;
    console.log(clas);
    this.disciplinesControl.setValue(this.clas.disciplines);
  }

  update() {
    this.clas.disciplines = this.disciplinesControl.value;
    this.classService.update(this.clas).subscribe(res => {
      this.router.navigate(['/classes']);
    })
  }

  back() {
    this.router.navigate(['/classes']);
  }

  get() {
    console.log(this.disciplinesControl.value);
  }

  onToppingRemoved(discipline: Disciplines) {
    const toppings = this.disciplinesControl.value as Disciplines[];
    this.disciplinesControl.setValue(toppings.filter(x=> x.id != discipline.id)); // To trigger change detection
  }

}
