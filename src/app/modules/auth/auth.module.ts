import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RecaptchaModule, ReCaptchaV3Service, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RecaptchaModule,
    SharedModule
  ],
  providers: [ReCaptchaV3Service, {
    provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey
  }]
})
export class AuthModule { }
