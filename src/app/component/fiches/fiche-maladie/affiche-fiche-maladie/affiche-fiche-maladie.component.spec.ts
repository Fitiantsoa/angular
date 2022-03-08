import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFicheMaladieComponent } from './affiche-fiche-maladie.component';

describe('AfficheFicheMaladieComponent', () => {
  let component: AfficheFicheMaladieComponent;
  let fixture: ComponentFixture<AfficheFicheMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheFicheMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheFicheMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
