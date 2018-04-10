
import { dispatch } from '@angular-redux/store';

/* Interfaces */
import { Unit } from './../../core/models/property.interface';
import { Contact } from './../../core/models/contact.interface';
import { IAction } from '../../core/models/action.interface';
import { BaseAction } from './base.action';

export class ResidentAction extends BaseAction {
    static readonly className: string = 'ResidentAction';
    static readonly SET_SELECTED_UNITS = ResidentAction.getActType('SET_SELECTED_UNITS');
    static readonly SET_SELECTED_CANDIDATES = ResidentAction.getActType('SET_SELECTED_CANDIDATES');
    static readonly SET_ATTACHED_CANDIDATES = ResidentAction.getActType('SET_ATTACHED_CANDIDATES');

    @dispatch()
    static setSelectedCandidates(selectedCandidates: Map<string, Contact>): IAction {
      return {
          type: ResidentAction.SET_SELECTED_CANDIDATES,
          payload: { selectedCandidates: selectedCandidates }
      };
    }

    @dispatch()
    static setAttachedCandidates(attachedCandidates): IAction {
      return {
          type: ResidentAction.SET_ATTACHED_CANDIDATES,
          payload: { attachedCandidates: attachedCandidates }
      };
    }

    @dispatch()
    static setSelectedUnits(selectedUnits: Map<number, Unit>): IAction {
      return {
          type: ResidentAction.SET_SELECTED_UNITS,
          payload: { selectedUnits: selectedUnits }
      };
    }
}
