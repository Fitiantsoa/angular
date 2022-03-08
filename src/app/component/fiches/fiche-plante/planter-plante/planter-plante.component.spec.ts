import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanterPlanteComponent } from './planter-plante.component';

describe('PlanterPlanteComponent', () => {
  let component: PlanterPlanteComponent;
  let fixture: ComponentFixture<PlanterPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanterPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanterPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
