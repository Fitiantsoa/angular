import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduitVendreComponent } from './edit-produit-vendre.component';

describe('EditProduitVendreComponent', () => {
  let component: EditProduitVendreComponent;
  let fixture: ComponentFixture<EditProduitVendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProduitVendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProduitVendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
