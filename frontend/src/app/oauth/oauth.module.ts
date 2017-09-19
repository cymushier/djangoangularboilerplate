import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OauthRoutes } from './oauth.routing';

import { OauthComponent } from './oauth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    OauthRoutes,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    OauthComponent,
    SignupComponent,
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class OauthModule { }
