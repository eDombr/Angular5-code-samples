import { Reducer } from 'redux';

import * as _ from 'lodash';

/* Interfaces */
import { Complaint } from './../../core/models/complaint.interface';
import { IAction } from '../../core/models/action.interface';
import { ComplaintActions } from './../actions/complaint.action';

export interface IComplaint {
  complaints: Complaint[];
  messages: Array<{text: string, sentTime: Date, from: string}>;
}

export const INITIAL_STATE: IComplaint = {
  complaints: [],
  messages: []
};

export const ComplaintReducer: Reducer<IComplaint> = (state = INITIAL_STATE, action: IAction): IComplaint => {
  switch (action.type) {
    case ComplaintActions.ADD_COMPLAINTS: {
      const complaints: Array<Complaint> = _.concat(action.payload.complaints, state.complaints);
      if (complaints.length) {
        return _.assign({}, state, { complaints });
      } else {
        return state;
      }
    }

    case ComplaintActions.SET_COMPLAINTS: {
      const complaints: Array<Complaint> = action.payload.complaints;
      return _.assign({}, state, { complaints });
    }

    case ComplaintActions.UPDATE_COMPLAINT: {
      const complaint: Complaint = action.payload.complaint;
      const complaints: Complaint[] = _.cloneDeep(state.complaints);
      if (complaint) {
        const index = _.findIndex(complaints, ['id', complaint.id]);
        complaints[index] = complaint;

        return _.assign({}, state, { complaints });
      } else {
        return state;
      }
    }

    case ComplaintActions.ADD_CONVERSATION_MESSAGES: {
      const messages: Array<{text: string, sentTime: Date, from: string}> = _.concat(state.messages, action.payload.messages);
      if (messages.length) {
        return _.assign({}, state, { messages });
      } else {
        return state;
      }
    }

    case ComplaintActions.SET_CONVERSATION_MESSAGES: {
      const messages: Array<{text: string, sentTime: Date, from: string}> = action.payload.messages;
      return _.assign({}, state, { messages });
    }
  }
  return state;
};

