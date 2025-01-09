import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  { 
    path: 'confirmation', 
    component: ConfirmationComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];
