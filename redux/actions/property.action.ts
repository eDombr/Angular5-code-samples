import { dispatch } from '@angular-redux/store';

/* Interfaces */
import { IAction } from '../../core/models/action.interface';
import { BaseAction } from './base.action';
import { Property, Unit, PropertyAdditionalInfo } from '../../core/models/property.interface';
import { PropertyAddress, PropertyType } from '../../core/models/property.interface';

export class PropertyAction extends BaseAction {
  static readonly className: string = 'PropertyAction';
  static readonly SET_PROPERTIES = PropertyAction.getActType('SET_PROPERTIES');
  static readonly SET_PROPERTY = PropertyAction.getActType('SET_PROPERTY');
  static readonly SET_PROPERTY_ADDRESS = PropertyAction.getActType('SET_PROPERTY_ADDRESS');
  static readonly SET_PROPERTY_TYPE = PropertyAction.getActType('SET_PROPERTY_TYPE');
  static readonly SET_PROPERTY_ADDITIONAL_INFO = PropertyAction.getActType('SET_PROPERTY_ADDITIONAL_INFO');
  static readonly SET_PROPERTY_DESCRIPTION = PropertyAction.getActType('SET_PROPERTY_DESCRIPTION');

  @dispatch()
  static setPropertyAddress(propertyAddress: PropertyAddress): IAction {
    return {
      type: PropertyAction.SET_PROPERTY_ADDRESS,
      payload: { propertyAddress }
    };
  }

  @dispatch()
  static setPropertyType(propertyType: number): IAction {
    return {
      type: PropertyAction.SET_PROPERTY_TYPE,
      payload: { propertyType }
    };
  }

  @dispatch()
  static setPropertyAdditionalInfo(propertyAdditionalInfo: PropertyAdditionalInfo): IAction {
    return {
      type: PropertyAction.SET_PROPERTY_ADDITIONAL_INFO,
      payload: { propertyAdditionalInfo }
    };
  }

  @dispatch()
  static setProperties(properties: Property[]): IAction {
    return {
      type: PropertyAction.SET_PROPERTIES,
      payload: { properties }
    };
  }

  @dispatch()
  static setProperty(property: Property): IAction {
    return {
      type: PropertyAction.SET_PROPERTY,
      payload: { property }
    };
  }

  @dispatch()
  static setPropertyDescription(description: string): IAction {
    return {
      type: PropertyAction.SET_PROPERTY_DESCRIPTION,
      payload: { description }
    };
  }
}
