import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-operation-status',
  templateUrl: './operation-status.component.html',
  styleUrls: ['./operation-status.component.scss']
})
export class OperationStatusComponent implements OnInit {
  error: any;
  operation: string;


  constructor(
    public dialogRef: MatDialogRef<OperationStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.error = this.data.error;
    this.operation = this.data.operation;
  }

  onOkClick() {
    this.dialogRef.close();
  }
}
