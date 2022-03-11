import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitPotagerComponent } from './create-produit-potager.component';

describe('CreateProduitPotagerComponent', () => {
  let component: CreateProduitPotagerComponent;
  let fixture: ComponentFixture<CreateProduitPotagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProduitPotagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduitPotagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
