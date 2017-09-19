import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { OauthComponent } from './oauth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth/login', pathMatch: 'full' },
  { path: 'oauth', redirectTo: 'oauth/login', pathMatch: 'full' }, // Seems not to respond accordingly
  {
    path: 'oauth',
    component: OauthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
];

export const OauthRoutes = RouterModule.forRoot(routes);
