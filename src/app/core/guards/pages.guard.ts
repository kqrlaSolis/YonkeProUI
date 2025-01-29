import { inject } from '@angular/core';
import { CanActivateFn, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormRouteStore } from '../store/formStore';

export const pagesGuard: CanActivateFn = (route, state) => {
  const store = inject(FormRouteStore);
  const router = inject(Router);
  console.log(store.isAvailable());
  if (!store.isAvailable()) {
    router.navigate(['home']);
    return false;
  }

  return true;
};
