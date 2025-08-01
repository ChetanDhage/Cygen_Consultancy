import { createSlice } from "@reduxjs/toolkit";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (!serializedState) return undefined;
    const parsed = JSON.parse(serializedState);
    if (parsed.expiry && Date.now() > parsed.expiry) {
      localStorage.removeItem("authState");
      return undefined;
    }
    return parsed;
  } catch {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      ...state,
      expiry: Date.now() + 3600000, // 1 hour expiry
    });
    localStorage.setItem("authState", serializedState);
  } catch {
    console.error("Error saving state");
  }
};

const initialState = loadState() || {
  loggedInUser: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;

      // Normally, you'd call an API here. For now, accept any non-empty credentials:
      if (email && password) {
        state.loggedInUser = { email };
        state.token = `token-${Date.now()}`; // dummy token
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Email and password are required!";
      }

      saveState(state);
    },

    logout(state) {
      state.loggedInUser = null;
      state.token = null;
      state.isAuthenticated = false;
      saveState(state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

// ✅ Selectors
export const selectCurrentUser = (state) => state.auth.loggedInUser;
export const selectCurrentToken = (state) => state.auth.token;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthError = (state) => state.auth.error;
