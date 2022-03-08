import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienPlanteComponent } from './entretien-plante.component';

describe('EntretienPlanteComponent', () => {
  let component: EntretienPlanteComponent;
  let fixture: ComponentFixture<EntretienPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntretienPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
