import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { RouterModule } from '@angular/router';
import { SERVICE_ROUTES } from './services.routes';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { LocalStorageService } from './local-storage/local-storage.service';

@NgModule({
  declarations: [
    ServiceDocumentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(SERVICE_ROUTES),
  ],
  providers: [
    UserService,
    LocalStorageService,
    { provide: 'LocalStorage', useValue: window.localStorage }
  ],
})
export class ServicesModule {}
