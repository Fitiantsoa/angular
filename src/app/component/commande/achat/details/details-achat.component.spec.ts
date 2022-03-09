import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAchatComponent } from './details-achat.component';

describe('DetailsComponent', () => {
  let component: DetailsAchatComponent;
  let fixture: ComponentFixture<DetailsAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
