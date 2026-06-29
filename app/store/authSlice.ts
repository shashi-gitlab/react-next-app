import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  users: UserProfile[];
}

const storageKey = 'mvcart-auth-state';

const defaultState: AuthState = {
  isAuthenticated: false,
  user: null,
  users: [],
};

const loadState = (): AuthState => {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const storedState = window.localStorage.getItem(storageKey);
    if (!storedState) {
      return defaultState;
    }

    return JSON.parse(storedState) as AuthState;
  } catch {
    return defaultState;
  }
};

const persistState = (state: AuthState) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }
};

const initialState: AuthState = loadState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: UserProfile; users: UserProfile[] }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.users = action.payload.users;
      persistState(state);
    },
    signupSuccess(state, action: PayloadAction<{ user: UserProfile; users: UserProfile[] }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.users = action.payload.users;
      persistState(state);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      persistState(state);
    },
    updateProfile(state, action: PayloadAction<UserProfile>) {
      if (!state.user) {
        return;
      }

      state.user = action.payload;
      state.users = state.users.map((existingUser) =>
        existingUser.email === action.payload.email ? action.payload : existingUser,
      );
      persistState(state);
    },
  },
});

export const { loginSuccess, signupSuccess, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
