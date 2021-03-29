import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { BankSlipComponent } from './billing/bank-slip/bank-slip.component';
import { CreditCardComponent } from './billing/credit-card/credit-card.component';
import { PayPixComponent } from './billing/pay-pix/pay-pix.component';
import { ReceiptComponent } from './billing/receipt/receipt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CreditCardDirectivesModule } from 'angular-cc-library';
// import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    BankSlipComponent,
    CreditCardComponent,
    PayPixComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // CreditCardDirectivesModule
    // NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
