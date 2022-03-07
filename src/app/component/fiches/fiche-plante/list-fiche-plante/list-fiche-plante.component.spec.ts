import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichePlanteComponent } from './list-fiche-plante.component';

describe('ListFichePlanteComponent', () => {
  let component: ListFichePlanteComponent;
  let fixture: ComponentFixture<ListFichePlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichePlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichePlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
