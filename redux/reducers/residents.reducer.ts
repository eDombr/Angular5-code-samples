import { Reducer } from 'redux';

import * as _ from 'lodash';

/* Interfaces */
import { Unit } from './../../../../../backend/src/db/models/unit.interface';
import { IAction } from '../../core/models/action.interface';
import { Contact } from './../../core/models/contact.interface';
import { ResidentAction } from '../actions/residents.action';

export interface IResident {
  selectedCandidates: Map<string, Contact>;
  selectedUnits: Map<number, Unit>;
  attachedCandidates;
}

export const INITIAL_STATE: IResident = {
  selectedCandidates: null,
  attachedCandidates: null,
  selectedUnits: null,
};

export const ResidentReducer: Reducer<IResident> = (state = INITIAL_STATE, action: IAction): IResident => {
    switch (action.type) {
      case ResidentAction.SET_SELECTED_CANDIDATES: {
        const selectedCandidates: Map<string, Contact> = <Map<string, Contact>>action.payload.selectedCandidates;

        if (selectedCandidates) {
          return _.assign({}, state, { selectedCandidates });
        } else {
          return state;
        }
      }

      case ResidentAction.SET_ATTACHED_CANDIDATES: {
        const attachedCandidates: Unit[] = <Unit[]>action.payload.attachedCandidates;

        if (attachedCandidates) {
          return _.assign({}, state, { attachedCandidates });
        } else {
          return state;
        }
      }

      case ResidentAction.SET_SELECTED_UNITS: {
        const selectedUnits: Map<number, Unit> = <Map<number, Unit>>action.payload.selectedUnits;

        if (selectedUnits) {
          return _.assign({}, state, { selectedUnits });
        } else {
          return state;
        }
      }
    }
    return state;
};
