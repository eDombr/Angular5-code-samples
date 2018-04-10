import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../common/shared.module';

/* Components */
import { OfflinePopupComponent } from '../common/components/offline-popup/offline-popup.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

/* Resolvers */
import { PropertiesResolver } from './resolvers/properties.resolver';
import { PropertyResolver } from './resolvers/property.resolver';

/* Services */
import { PropertiesService } from './../dashboard/properties/properties.service';
import { AuthenticationService } from './services/auth.service';
import { AlertService } from './services/notification.service';
import { CustomHttpInterceptor } from './services/http.service';
import { NotificationCenterService } from './services/notification-center.service';
import { UserService } from './services/user.service';

/* Guards */
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    OfflinePopupComponent,
    SnackBarComponent
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    AuthGuard,
    RoleGuard,
    NotificationCenterService,
    PropertiesService,
    PropertyResolver,
    PropertiesResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  exports: [
    OfflinePopupComponent
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
