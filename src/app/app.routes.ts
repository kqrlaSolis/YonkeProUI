import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { pagesGuard } from './core/guards/pages.guard';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canActivate: [pagesGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
