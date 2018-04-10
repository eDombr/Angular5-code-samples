import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { IStore } from '../../../../../redux/app.store';
import { Contact } from '../../../../../core/models/contact.interface';

import { ContactsService } from '../../../contacts.service';

import { CloudActions } from './../../../../../redux/actions/cloud.action';
import { AppActions } from './../../../../../redux/actions/app.action';


@Component({
  selector: 'app-contact-notes',
  templateUrl: './contact-notes.component.html',
  styleUrls: ['./contact-notes.component.scss']
})
export class ContactNotesComponent implements OnInit {
  public contactNotesForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ngRedux: NgRedux<IStore>,
    private contactsService: ContactsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.contactNotesForm = this.fb.group({
      notes: [''],
    });
  }

  public createContact() {
    const state = this.ngRedux.getState();
    const contactForm = state.contact.contactForms;

    const newContact: Contact = <Contact>_.assign(
      { type: 'contact' },
      contactForm.infoForm,
      contactForm.addressForm,
      contactForm.contactsForm,
      contactForm.notesForm
    );

    this.contactsService.addContact(newContact)
      .subscribe(contact => {
        AppActions.addContact(newContact);
        CloudActions.setPath('');
        CloudActions.setFolder('Contacts', null);

        this.router.navigate(['dashboard/contacts']);
      });
  }
}
