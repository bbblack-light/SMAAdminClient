import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiviementEditPageComponent } from './achiviement-edit-page.component';

describe('AchiviementEditPageComponent', () => {
  let component: AchiviementEditPageComponent;
  let fixture: ComponentFixture<AchiviementEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchiviementEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiviementEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
