import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSlipComponent } from './bank-slip.component';

describe('BankSlipComponent', () => {
  let component: BankSlipComponent;
  let fixture: ComponentFixture<BankSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
