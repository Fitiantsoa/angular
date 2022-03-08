import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubanAccueilComponent } from './ruban-accueil.component';

describe('RubanAccueilComponent', () => {
  let component: RubanAccueilComponent;
  let fixture: ComponentFixture<RubanAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubanAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubanAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
