import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

/* Store Interfaces and Reducers */
import { IResident, ResidentReducer } from './reducers/residents.reducer';
import { IProperty, PropertyReducer } from './reducers/property.reducer';
import { INotifications, NotificationsReducer } from './reducers/notifications.reducer';
import { IComplaint, ComplaintReducer } from './reducers/complaint.reducer';
import { IContact, ContactReducer } from './reducers/contact.reducer';

/* Store Initial States */
import { INITIAL_STATE as INITIAL_STATE_PROPERTY } from './reducers/property.reducer';
import { INITIAL_STATE as INITIAL_STATE_RESIDENT } from './reducers/residents.reducer';
import { INITIAL_STATE as INITIAL_STATE_NOTIFICATIONS } from './reducers/notifications.reducer';
import { INITIAL_STATE as INITIAL_STATE_COMPLAINT } from './reducers/complaint.reducer';
import { INITIAL_STATE as INITIAL_STATE_CONTACT } from './reducers/contact.reducer';

/* Store Interface */
export interface IStore {
    property: IProperty;
    resident: IResident;
    notifications: INotifications;
    complaint: IComplaint;
    contact: IContact;
}

/* Store Initial State */
export const INITIAL_STATE: IStore = {
    property: INITIAL_STATE_PROPERTY,
    resident: INITIAL_STATE_RESIDENT,
    notifications: INITIAL_STATE_NOTIFICATIONS,
    complaint: INITIAL_STATE_COMPLAINT,
    contact: INITIAL_STATE_CONTACT,
};

/* Combine State Reducers */
export const StoreReducer = composeReducers(
  defaultFormReducer(),
  combineReducers<IStore>({
    property: PropertyReducer,
    resident: ResidentReducer,
    notifications: NotificationsReducer,
    complaint: ComplaintReducer,
    contact: ContactReducer
  })
);
