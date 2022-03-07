import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFicheRavageurComponent } from './edit-fiche-ravageur.component';

describe('EditFicheRavageurComponent', () => {
  let component: EditFicheRavageurComponent;
  let fixture: ComponentFixture<EditFicheRavageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFicheRavageurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFicheRavageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
