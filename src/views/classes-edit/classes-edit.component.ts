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
  public clas : Classes;
  public id : number;
  public toppingsControl = new FormControl([]);
  public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private disciplinesService: DisciplineService,
    private classService: ClassesService) {     
  }

  ngOnInit(): void {
    this.disciplinesService.getAll().subscribe(res => this.disciplines = res);

    this.id = this.route.snapshot.params['id'];
    if (this.id == 0) {
      this.clas = new Classes(null, "", "", []);
    }
    else {
      this.classService.get(this.id).subscribe(res => this.clas = res);
    }
  }

  update() {
    this.classService.update(this.clas).subscribe(res => {
      if (res.id!=null) {
        this.router.navigate(['/classes']);
      }
    })
  }

  get() {
    console.log(this.toppingsControl.value);
  }

  onToppingRemoved(topping: Disciplines) {
    const toppings = this.toppingsControl.value as Disciplines[];
    this.toppingsControl.setValue(toppings.filter(x=> x.id != topping.id)); // To trigger change detection
  }

}
