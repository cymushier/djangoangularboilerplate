import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard/posts', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'post-detail/:id', component: PostDetailComponent },
    ]
  }
];

export const DashboardRoutes = RouterModule.forRoot(routes);
