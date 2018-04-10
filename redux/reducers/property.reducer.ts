import { Reducer } from 'redux';

import * as _ from 'lodash';

/* Interfaces */
import { IAction } from '../../core/models/action.interface';
import { PropertyAddress, PropertyAdditionalInfo, PropertyUnit, PropertyType, Property, Unit } from '../../core/models/property.interface';
import { PropertyAction } from './../actions/property.action';

export interface IProperty {
  properties: Property[];
  property: Property;
  propertyUnit: PropertyUnit;
  newProperty: {
    description: string;
    propertyAddress: PropertyAddress;
    propertyType: number;
    propertyAdditionalInfo: PropertyAdditionalInfo;
  };
}

export const INITIAL_STATE: IProperty = {
  properties: [],
  property: null,
  propertyUnit: null,
  newProperty: {
    description: '',
    propertyAddress: null,
    propertyType: null,
    propertyAdditionalInfo: null
  }
};

export const PropertyReducer: Reducer<IProperty> = (state = INITIAL_STATE, action: IAction): IProperty => {
  switch (action.type) {
    case PropertyAction.SET_PROPERTIES: {
      const properties: Array<Property> = <Array<Property>>action.payload.properties;
      if (properties) {
        return _.assign({}, state, { properties });
      } else {
        return state;
      }
    }
    case PropertyAction.SET_PROPERTY: {
      const property: Property = <Property>action.payload.property;
      if (property) {
        const properties = [...state.properties];

        const propPos = _.findIndex(properties, { id: property.id });
        if (propPos != null) {
          properties.splice(propPos, 1, property);
        } else {
          properties.push(property);
        }

        return _.assign({}, state, { property, properties });
      } else {
        return state;
      }
    }
    case PropertyAction.SET_PROPERTY_ADDRESS: {
      const propertyAddress: PropertyAddress = <PropertyAddress>action.payload.propertyAddress;
      if (propertyAddress) {
        const newProperty = _.cloneDeep(state.newProperty);
        newProperty.propertyAddress = propertyAddress;
        return _.assign({}, state, { newProperty });
      } else {
        return state;
      }
    }

    case PropertyAction.SET_PROPERTY_ADDITIONAL_INFO: {
      const propertyAdditionalInfo: PropertyAdditionalInfo = <PropertyAdditionalInfo>action.payload.propertyAdditionalInfo;
      if (propertyAdditionalInfo) {
        const newProperty = _.cloneDeep(state.newProperty);
        newProperty.propertyAdditionalInfo = propertyAdditionalInfo;
        return _.assign({}, state, { newProperty });
      } else {
        return state;
      }
    }

    case PropertyAction.SET_PROPERTY_TYPE: {
      const propertyType: number = <number>action.payload.propertyType;
      if (propertyType) {
        const newProperty = _.cloneDeep(state.newProperty);
        newProperty.propertyType = propertyType;
        return _.assign({}, state, { newProperty });
      } else {
        return state;
      }
    }

    case PropertyAction.SET_PROPERTY_DESCRIPTION: {
      const description: string = <string>action.payload.description;
      if (description) {
        const newProperty = _.cloneDeep(state.newProperty);
        newProperty.description = description;
        return _.assign({}, state, { newProperty });
      } else {
        return state;
      }
    }
  }
  return state;
};
