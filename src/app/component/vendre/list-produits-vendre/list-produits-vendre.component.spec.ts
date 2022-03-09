import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsVendreComponent } from './list-produits-vendre.component';

describe('ListProduitsVendreComponent', () => {
  let component: ListProduitsVendreComponent;
  let fixture: ComponentFixture<ListProduitsVendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitsVendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitsVendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
