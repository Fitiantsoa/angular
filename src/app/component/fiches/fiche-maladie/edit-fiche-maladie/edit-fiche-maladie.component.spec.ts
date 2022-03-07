import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFicheMaladieComponent } from './edit-fiche-maladie.component';

describe('EditFicheMaladieComponent', () => {
  let component: EditFicheMaladieComponent;
  let fixture: ComponentFixture<EditFicheMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFicheMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFicheMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
