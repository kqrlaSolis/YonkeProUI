import { signalStore, withMethods, withState } from "@ngrx/signals";

type AuthState = {
    user: {phone: string, password: string} | null;
    isAuthenticated: boolean;
};


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
  };

  export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({

    })
));