import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFicheMaladieComponent } from './list-fiche-maladie.component';

describe('ListFicheMaladieComponent', () => {
  let component: ListFicheMaladieComponent;
  let fixture: ComponentFixture<ListFicheMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFicheMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFicheMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
