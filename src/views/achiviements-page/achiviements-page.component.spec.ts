import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiviementsPageComponent } from './achiviements-page.component';

describe('AchiviementsPageComponent', () => {
  let component: AchiviementsPageComponent;
  let fixture: ComponentFixture<AchiviementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchiviementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiviementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
