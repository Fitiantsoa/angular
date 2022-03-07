import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFicheRavageurComponent } from './list-fiche-ravageur.component';

describe('ListFicheRavageurComponent', () => {
  let component: ListFicheRavageurComponent;
  let fixture: ComponentFixture<ListFicheRavageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFicheRavageurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFicheRavageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
