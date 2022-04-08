import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable} from '@angular/material/table';
import { Disciplines } from 'src/model/buisness/Disciplines';
import { DisciplineService } from 'src/services/disciplines.service';
import { MyOwnMatTableDataSource } from 'src/utils/MyOwnLoadableWrapper';
import { DisciplineEditDialogComponent } from '../discipline-edit-dialog/discipline-edit-dialog.component';

@Component({
  selector: 'app-disciplines-page',
  templateUrl: './disciplines-page.component.html',
  styleUrls: ['./disciplines-page.component.scss']
})
export class DisciplinesPageComponent implements OnInit {

  public displayedColumns: string[] = ['Выбрать', '№', 'Название', 'Описание'];
  public disciplines: MyOwnMatTableDataSource<Disciplines>;
  @ViewChild(MatTable) table: MatTable<Disciplines>;
  constructor(
    public dialog: MatDialog,
    private disciplineService: DisciplineService
  ) { }

  async ngOnInit(): Promise<void> {
    this.disciplines = new MyOwnMatTableDataSource<Disciplines>();
    await this.load();
  }

  async load() {
    this.disciplineService.getAll().subscribe(res => {
      this.disciplines.addData(res);
    });
  }

  save(discipline = new Disciplines(null, "", "")) {
    const dialogRef = this.dialog.open(DisciplineEditDialogComponent, {
      width: '400px',
      data: discipline
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result==null || result===undefined) return;
      this.disciplineService.update(result).subscribe(res => {
        if (result.id == null) {
          this.disciplines.addElement(res);
        }
        else {
          this.disciplines.changeElement(res);
        }
      });
    });
  }

  update() {
    this.save({...this.disciplines.getSelected(0)});
    this.disciplines.clearSelection();
  }

  async deleteD() { 
    this.disciplines.selection.selected.forEach(selected => {
      this.disciplineService.delete(selected.id).subscribe(deleted => {
        this.disciplines.selection.deselect(selected);
        this.disciplines.removeElement(selected);
      })
    })
  }
}
