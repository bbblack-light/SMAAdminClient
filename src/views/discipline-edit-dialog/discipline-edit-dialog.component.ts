import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Disciplines } from 'src/model/buisness/Disciplines';

@Component({
  selector: 'discipline-edit-dialog.component',
  templateUrl: './discipline-edit-dialog.component.html',
  styleUrls: ['./discipline-edit-dialog.component.scss']
})
export class DisciplineEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DisciplineEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Disciplines) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
