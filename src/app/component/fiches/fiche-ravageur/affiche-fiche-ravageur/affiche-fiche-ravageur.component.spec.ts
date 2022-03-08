import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFicheRavageurComponent } from './affiche-fiche-ravageur.component';

describe('AfficheFicheRavageurComponent', () => {
  let component: AfficheFicheRavageurComponent;
  let fixture: ComponentFixture<AfficheFicheRavageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheFicheRavageurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheFicheRavageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
