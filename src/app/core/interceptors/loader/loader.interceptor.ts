import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderStore } from '../../store/loaderStore';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderStore = inject(LoaderStore);

  loaderStore.setIsLoading(true);

  return next(req).pipe(
    finalize(() => {
      loaderStore.setIsLoading(false);
    })
  );
};
