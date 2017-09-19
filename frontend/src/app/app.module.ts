import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AngularMaterialModule } from './angular-material.module';

import { OauthModule } from './oauth/oauth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    AppRoutes,
    OauthModule,
    DashboardModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
