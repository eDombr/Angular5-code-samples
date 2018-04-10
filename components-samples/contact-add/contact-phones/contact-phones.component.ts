import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-phones',
  templateUrl: './contact-phones.component.html',
  styleUrls: ['./contact-phones.component.scss']
})
export class ContactPhonesComponent implements OnInit {
  public contactsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.contactsForm = this.fb.group({
      email: ['', [Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required]],
      mobile: [''],
      website: [''],
    });
  }
}
