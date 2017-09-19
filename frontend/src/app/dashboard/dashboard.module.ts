import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard.routing';

import { PostDetailComponent } from './posts/post-detail.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts/posts.service';

import { CommonService } from '.././common.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [
    DashboardComponent,
    PostDetailComponent,
    PostsComponent
  ],
  providers: [
    PostsService,
    CommonService
  ]
})
export class DashboardModule { }
