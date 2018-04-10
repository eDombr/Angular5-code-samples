import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  public contactInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.contactInfoForm = this.fb.group({
      prename: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){2,40}$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){2,40}$/)]],
      role: 'sufdicciant',
      salutation: ['', Validators.required],
      company: [''],
      iban: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}')]]
    });
  }
}
