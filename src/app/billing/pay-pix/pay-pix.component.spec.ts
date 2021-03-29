import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPixComponent } from './pay-pix.component';

describe('PayPixComponent', () => {
  let component: PayPixComponent;
  let fixture: ComponentFixture<PayPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
