import { Reducer } from 'redux';

import * as _ from 'lodash';

/* Interfaces */
import { Notification } from '../../core/models/notification.interface';
import { IAction } from '../../core/models/action.interface';
import { NotificationsActions } from './../actions/notifications.action';

export interface INotifications {
    notifications: Notification[];
    count: number;
}

export const INITIAL_STATE: INotifications = {
    notifications: [],
    count: 0,
};

export const NotificationsReducer: Reducer<INotifications> = (state = INITIAL_STATE, action: IAction): INotifications => {
    switch (action.type) {
        case NotificationsActions.ADD_NOTIFICATIONS: {
            const notifications: Array<Notification> = _.concat(action.payload.notifications, state.notifications);
            if (notifications.length) {
              return _.assign({}, state, { notifications });
            } else {
              return state;
            }
        }

        case NotificationsActions.INCREASE_COUNT: {
            const count = state.count + 1;
            return _.assign({}, state, { count } );
        }

        case NotificationsActions.SET_COUNT: {
            const count = action.payload.count;
            return _.assign({}, state, { count } );
        }

        case NotificationsActions.CLEAR_NOTIFICATIONS: {
          return _.assign({}, state, { notifications: [] } );
      }
    }
    return state;
};

