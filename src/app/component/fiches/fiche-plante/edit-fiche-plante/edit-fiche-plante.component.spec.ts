import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFichePlanteComponent } from './edit-fiche-plante.component';

describe('EditFichePlanteComponent', () => {
  let component: EditFichePlanteComponent;
  let fixture: ComponentFixture<EditFichePlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFichePlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFichePlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
