
import { dispatch } from '@angular-redux/store';

/* Interfaces */
import { Notification } from '../../core/models/notification.interface';
import { IAction } from '../../core/models/action.interface';
import { BaseAction } from './base.action';

export class NotificationsActions extends BaseAction {
    static readonly className: string = 'NotificationsActions';
    static readonly CLEAR_NOTIFICATIONS = NotificationsActions.getActType('CLEAR_NOTIFICATIONS');
    static readonly ADD_NOTIFICATIONS = NotificationsActions.getActType('ADD_NOTIFICATIONS');
    static readonly INCREASE_COUNT = NotificationsActions.getActType('INCREASE_COUNT');
    static readonly SET_COUNT = NotificationsActions.getActType('SET_COUNT');

    @dispatch()
    static addNotifications(notifications: Array<Notification>|Notification): IAction {
      return {
          type: NotificationsActions.ADD_NOTIFICATIONS,
          payload: { notifications }
      };
    }

    @dispatch()
    static increaseCount(): IAction {
        return {
            type: NotificationsActions.INCREASE_COUNT
        };
    }

    @dispatch()
    static setCount(count: number): IAction {
        return {
            type: NotificationsActions.SET_COUNT,
            payload: { count }
        };
    }

    @dispatch()
    static clearNotifications(): IAction {
        return {
            type: NotificationsActions.CLEAR_NOTIFICATIONS,
            payload: {}
        };
    }
}
