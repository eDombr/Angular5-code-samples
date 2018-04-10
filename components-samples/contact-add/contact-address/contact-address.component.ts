import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-address',
  templateUrl: './contact-address.component.html',
  styleUrls: ['./contact-address.component.scss']
})
export class ContactAddressComponent implements OnInit {
  public contactAddressForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.contactAddressForm = this.fb.group({
      city: [''],
      street: [''],
      postcode: ['', Validators.pattern(/^\d+$/)],
      streetnr: [''],
    });
  }
}
