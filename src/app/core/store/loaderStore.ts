import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type LoaderState = {
  isLoading: boolean;
};

const initialState: LoaderState = {
  isLoading: false,
};

export const LoaderStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setIsLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
  }))
);
