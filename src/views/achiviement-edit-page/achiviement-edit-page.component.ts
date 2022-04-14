import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from 'src/model/buisness/Achievement';
import { Disciplines } from 'src/model/buisness/Disciplines';
import { AchievementService } from 'src/services/achievement.service';
import { DisciplineService } from 'src/services/disciplines.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperDialogComponent } from '../image-cropper-dialog/image-cropper-dialog.component';

@Component({
  selector: 'app-achiviement-edit-page',
  templateUrl: './achiviement-edit-page.component.html',
  styleUrls: ['./achiviement-edit-page.component.scss']
})
export class AchiviementEditPageComponent implements OnInit {
  public disciplines : Disciplines [];
  public achiviement : Achievement = new Achievement(null, "", "", "", 0);
  public id : number;
  public disciplinesControl = new FormControl([]);

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private disciplinesService: DisciplineService,
    private achievementService: AchievementService) {     
  }

  ngOnInit(): void {
    this.disciplinesService.getAll().subscribe(res => {
      this.disciplines = res;

      this.id = this.route.snapshot.params['id'];
      if (this.id != 0){
        this.achievementService.get(this.id).subscribe(res => {
          this.achiviement = res;
          this.disciplinesControl.setValue(this.disciplines.filter(d=> res.disciplines.some(rd => rd.id === d.id)));
          console.log(this.disciplinesControl.value);
        });
      }
    });
  }

  setClass(achievement) {
    this.achiviement = achievement;
    console.log(achievement);
    // this.disciplinesControl.setValue(this.achiviement.disciplines);
  }

  update() {
    // this.achiviement.disciplines = this.disciplinesControl.value;
    this.achievementService.update(this.achiviement).subscribe(res => {
      this.router.navigate(['/achievements']);
    })
  }

  back() {
    this.router.navigate(['/achievements']);
  }

  get() {
    console.log(this.disciplinesControl.value);
  }

  onToppingRemoved(discipline: Disciplines) {
    const toppings = this.disciplinesControl.value as Disciplines[];
    this.disciplinesControl.setValue(toppings.filter(x=> x.id != discipline.id)); // To trigger change detection
  }

  uploadFile(): void {
    const dialogRef = this.dialog.open(ImageCropperDialogComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => { 
      if (result==null || result===undefined) return;

      this.achiviement.base64 = result;
    });
  }
}
