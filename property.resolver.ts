import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PropertiesService } from './../../dashboard/properties/properties.service';
import { PropertyAction } from './../../redux/actions/property.action';


@Injectable()
export class PropertyResolver implements Resolve<any> {
    constructor(private propertiesService: PropertiesService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      const params = route.paramMap;
      const id = params.get('id');

      return this.propertiesService.getPropertyById(+id)
          .map((data: any) => {
              PropertyAction.setProperty(data);

              return data;
          });
    }
}
