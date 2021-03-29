import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidator } from 'angularx-cc-library';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  /**
  * Data form card
  */
  cardForm: FormGroup;

  cardSide: boolean = true;

  cardinfo: object={};

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

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

      number: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9_-]*')
        ])
      ],
      month: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern('[0-9_-]*')
        ])
      ],
      year: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern('[0-9_-]*')
        ])
      ],
      cvv: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern('[0-9_-]*')
        ])
      ],

      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[a-zA-Z _-]*')
        ])
      ],
      pay: ['', Validators.required]
    });
  }

  ValidateCreditCardNumber() {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;

    // if (visaRegEx.test(this.cardinfo.number)) {
    //   this.isVisa = true;
    //   this.isMastercard = false;
    // } else if (mastercardRegEx.test(this.cardinfo.number)) {
    //   this.isMastercard = true;
    //   this.isVisa = false;
    // } else {
    //   this.isVisa = false;
    //   this.isMastercard = false;
    // }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['cardForm']) {
  //     console.log("tem mudança")
  //     // if (
  //     //   this.selected.cellphone !== null &&
  //     //   this.selected.cellphone !== undefined &&
  //     //   this.selected.cellphone.length > 11
  //     // ) {
  //     //   this.selected.cellphone = this.selected.cellphone.substr(3);
  //     // }
  //     // this.userForm.patchValue(this.selected);
  //   }
  // }

}
