import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OperationStatusComponent } from '../views/operation-status/operation-status.component';

@Injectable({
  providedIn: 'root'
})
export class OperationStatusService {

  constructor(
    private dialogRef: MatDialog,
    private snackBar: MatSnackBar) { }


    openSnackBarError(operation: string, error: any) {
      let snackBarRef = this.snackBar.open("Что-то пошло не так", "подробнее", {
        duration: 5000,
        panelClass: ['mat-snack-bar']
      });

      snackBarRef.onAction().subscribe(() => {
        const more = this.dialogRef.open(OperationStatusComponent, {
          width: '700px',
          data: {
            error: error,
            operation: operation
          }
        });
      });    
    }

    openSnackBarNoError(message: string) {
      let snackBarRef = this.snackBar.open(message, "ок", {
        duration: 5000,
        panelClass: ['mat-snack-bar']
      });
    }
}
