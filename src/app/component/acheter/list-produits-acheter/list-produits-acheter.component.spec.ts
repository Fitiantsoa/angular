import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsAcheterComponent } from './list-produits-acheter.component';

describe('ListProduitsAcheterComponent', () => {
  let component: ListProduitsAcheterComponent;
  let fixture: ComponentFixture<ListProduitsAcheterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitsAcheterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitsAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
