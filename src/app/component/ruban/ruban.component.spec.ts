import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubanComponent } from './ruban.component';

describe('RubanComponent', () => {
  let component: RubanComponent;
  let fixture: ComponentFixture<RubanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
