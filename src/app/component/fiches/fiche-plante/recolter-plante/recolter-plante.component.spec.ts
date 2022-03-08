import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolterPlanteComponent } from './recolter-plante.component';

describe('RecolterPlanteComponent', () => {
  let component: RecolterPlanteComponent;
  let fixture: ComponentFixture<RecolterPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecolterPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecolterPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
