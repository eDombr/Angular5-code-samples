import { Reducer } from 'redux';

import * as _ from 'lodash';

/* Interfaces */
import { IAction } from '../../core/models/action.interface';
import { ContactActions } from './../actions/contact.action';

export interface IContact {
    contactForms: {
        infoForm: {
            prename: string;
            lastname: string;
            role: string;
            salutation: string;
            company: string;
            iban: string;
        };
        addressForm: {
            city: string;
            street: string;
            postcode: string;
            streetnr: string;
        };
        contactsForm: {
            email: string;
            mobile: string;
            website: string;
        };
        notesForm: {
            notes: string;
        };
    };
}

export const INITIAL_STATE: IContact = {
    contactForms: {
        infoForm: {
            prename: '',
            lastname: '',
            role: 'sufdicciant',
            salutation: '',
            company: '',
            iban: ''
        },
        addressForm: {
            city: '',
            street: '',
            postcode: '',
            streetnr: ''
        },
        contactsForm: {
            email: '',
            mobile: '',
            website: ''
        },
        notesForm: {
            notes: ''
        }
    },
};

export const ContactReducer: Reducer<IContact> = (state = INITIAL_STATE, action: IAction): IContact => {
    switch (action.type) {
        case ContactActions.RESET_FORMS: {
            const contactForms = INITIAL_STATE.contactForms;
            return _.assign({}, state, { contactForms } );
        }
    }
    return state;
};

