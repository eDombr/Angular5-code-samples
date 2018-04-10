import { Component, OnInit } from '@angular/core';

import { ContactActions } from './../../../../redux/actions/contact.action';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})

export class ContactAddComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
    ContactActions.resetForms();
  }
}
