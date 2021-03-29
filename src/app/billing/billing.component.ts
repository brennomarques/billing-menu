import { Component, OnInit } from '@angular/core';

export const BILLING_TYPE = {
  BANK_SLIP: 0,
  CREDIT_CARD: 1,
  PAY_PIX:2,
  RECEIPT: 3,
};

// boleto bancario = bank slip
// cartão de credito = credit card
// pagar pix = pay pix

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})



export class BillingComponent implements OnInit {

  BILLING_TYPE = BILLING_TYPE;

  public show: number;

  constructor() {
    this.show = BILLING_TYPE.CREDIT_CARD;
  }

  ngOnInit(): void {

  }

}
