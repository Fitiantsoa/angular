import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitVendreComponent } from './create-produit-vendre.component';

describe('CreateProduitVendreComponent', () => {
  let component: CreateProduitVendreComponent;
  let fixture: ComponentFixture<CreateProduitVendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProduitVendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduitVendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
