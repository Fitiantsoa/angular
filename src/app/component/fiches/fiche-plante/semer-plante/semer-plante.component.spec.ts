import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemerPlanteComponent } from './semer-plante.component';

describe('SemerPlanteComponent', () => {
  let component: SemerPlanteComponent;
  let fixture: ComponentFixture<SemerPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemerPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemerPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
