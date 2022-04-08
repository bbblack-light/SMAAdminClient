import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineEditDialogComponent } from './discipline-edit-dialog.component';

describe('DisciplineEditDialogComponent', () => {
  let component: DisciplineEditDialogComponent;
  let fixture: ComponentFixture<DisciplineEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
