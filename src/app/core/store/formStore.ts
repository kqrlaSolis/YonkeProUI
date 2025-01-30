import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type FormRouteState = {
  isAvailable: boolean;
};

const initialState: FormRouteState = {
  isAvailable: false,
};

export const FormRouteStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setIsAvailable(isAvailable: boolean) {
      patchState(store, { isAvailable });
    },
  }))
);
