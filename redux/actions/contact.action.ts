
import { dispatch } from '@angular-redux/store';

/* Interfaces */
import { IAction } from '../../core/models/action.interface';
import { BaseAction } from './base.action';

export class ContactActions extends BaseAction {
    static readonly className: string = 'ContactActions';
    static readonly RESET_FORMS = ContactActions.getActType('RESET_FORMS');

    @dispatch()
    static resetForms(): IAction {
      return {
          type: ContactActions.RESET_FORMS,
      };
    }
}
