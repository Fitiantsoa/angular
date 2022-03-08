import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFichePlanteComponent } from './affiche-fiche-plante.component';

describe('AfficheFichePlanteComponent', () => {
  let component: AfficheFichePlanteComponent;
  let fixture: ComponentFixture<AfficheFichePlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheFichePlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheFichePlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
