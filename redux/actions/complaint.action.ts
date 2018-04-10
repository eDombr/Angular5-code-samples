import { dispatch } from '@angular-redux/store';

/* Interfaces */
import { Complaint } from './../../core/models/complaint.interface';
import { IAction } from '../../core/models/action.interface';
import { BaseAction } from './base.action';

export class ComplaintActions extends BaseAction {
  static readonly className: string = 'NotificationsActions';
  static readonly ADD_COMPLAINTS = ComplaintActions.getActType('ADD_COMPLAINTS');
  static readonly ADD_CONVERSATION_MESSAGES = ComplaintActions.getActType('ADD_CONVERSATION_MESSAGES');
  static readonly SET_CONVERSATION_MESSAGES = ComplaintActions.getActType('SET_CONVERSATION_MESSAGES');
  static readonly SET_COMPLAINTS = ComplaintActions.getActType('SET_COMPLAINTS');
  static readonly UPDATE_COMPLAINT = ComplaintActions.getActType('UPDATE_COMPLAINT');

  @dispatch()
  static addComplaints(complaints: Array<Complaint> | Complaint): IAction {
    return {
      type: ComplaintActions.ADD_COMPLAINTS,
      payload: { complaints }
    };
  }

  @dispatch()
  static addConversationMessages(messages: string[]): IAction {
    return {
      type: ComplaintActions.ADD_CONVERSATION_MESSAGES,
      payload: { messages }
    };
  }

  @dispatch()
  static setConversationMessages(messages: string[]): IAction {
    return {
      type: ComplaintActions.SET_CONVERSATION_MESSAGES,
      payload: { messages }
    };
  }

  @dispatch()
  static setComplaints(complaints: Array<Complaint> | Complaint): IAction {
    return {
      type: ComplaintActions.SET_COMPLAINTS,
      payload: { complaints }
    };
  }

  @dispatch()
  static updateComplaint(complaint: Complaint): IAction {
    return {
      type: ComplaintActions.UPDATE_COMPLAINT,
      payload: { complaint }
    };
  }
}
