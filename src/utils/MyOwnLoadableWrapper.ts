import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BaseModel } from "src/model/BaseModel";

export class MyOwnMatTableDataSource<T extends BaseModel> extends MatTableDataSource<T> {
    
    addElement(element : T) {
      this.data.push(element);
      this.updateData();
    }
  
    changeElement(oldElement : T, newElement : T) {
      let index = this.data.indexOf(oldElement);
      console.log('changing')
      if (index!=null) {
        this.data[index] = {...newElement}
        this.updateData();
      }
    }
  
    addData(data: T[]) {
      data.forEach(x=> {
        if (!this.data.includes(x)) {
          this.data.push(x);
        }
      })
      this.updateData();
    }
  
    removeElement(element : T) {
      this.data = this.data.filter(x=> x.id != element.id)
    }
  
    changeData(data) {
      this.data = data;
    }
  
    private updateData() {
      this.data = this.data;
    }
  
    selection = new SelectionModel<T>(true, []);
  
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.data.forEach(row => this.selection.select(row));
    }
    
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.data.length;
      return numSelected === numRows;
    }
  
    clearSelection() {
      this.selection.clear();
    }
  
    getSelected(index : number) {
      return this.selection.selected[index];
    }
  }