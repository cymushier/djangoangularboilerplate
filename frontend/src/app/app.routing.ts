import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'oauth', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forRoot(routes);
