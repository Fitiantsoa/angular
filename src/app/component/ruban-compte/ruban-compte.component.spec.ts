import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubanCompteComponent } from './ruban-compte.component';

describe('RubanCompteComponent', () => {
  let component: RubanCompteComponent;
  let fixture: ComponentFixture<RubanCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubanCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubanCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
