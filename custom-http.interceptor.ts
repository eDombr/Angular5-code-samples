import { SnackBarComponent } from './../components/snack-bar/snack-bar.component';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import * as _ from 'lodash';

import { AlertService } from './notification.service';
import { NotificationsActions } from '../../redux/actions/notifications.action';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private alertService: AlertService,
              private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    const request = token ? req.clone({
      headers: req.headers.set('Authorization', token)
    }) : req;

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (!(event instanceof HttpResponse)) {
        return;
      }

      const notification = _.get(event, 'body.notification');
      if (!notification) {
        return;
      }

      NotificationsActions.addNotifications(notification);
      NotificationsActions.increaseCount();

      const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
        data: { message: notification.message, type: notification.type },
        verticalPosition: 'top',
        duration: 5000,
      });
    }, (err: any) => {
      if (err.status === 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
      
      this.alertService.alertNotification(err.statusText);
      return Observable.throw(err);
    });
  }
}
