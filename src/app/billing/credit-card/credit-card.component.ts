import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators, CreditCard } from 'angular-cc-library';
import { defer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {

  /**
   * Data form card
   */
  public cardForm: FormGroup;

  public cardSide: boolean = true;

  public cardBrand: string;


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}


  /**
   * Get Card Banner
   */
  public type$ = defer(() => this.cardForm.get('number').valueChanges).pipe(
    map((num: string) => CreditCard.cardType(num))
  );

  /**
   *Show card banner
   *
   */
  public showCardBanner(){
    this.type$.subscribe((fleg)=>{
      this.cardBrand = fleg
    })

  }

  /**
   *  Go To Next Field
   */
  public goToNextField(controlName: string, nextField: HTMLInputElement) {
    if (this.cardForm.get(controlName)?.valid) {
      nextField.focus();
    }
  }


  /**
   *  Getter to access the form fields
   *
   *  @return AbstractControl
   */
  get f() {
    return this.cardForm.controls;
  }

  /**
   * Form creation and validation configuration
   */
  private createForm() {
    this.cardForm = this.formBuilder.group({
      number: ['', CreditCardValidators.validateCCNumber],

      month: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('[0-9_-]*'),
        ]),
      ],
      year: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('[0-9_-]*'),
        ]),
      ],
      cvv: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern('[0-9]*'),
        ]),
      ],

      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[a-zA-Z _-]*'),
        ]),
      ],
      pay: ['', Validators.required],
    });
  }

}
