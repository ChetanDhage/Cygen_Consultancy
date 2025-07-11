import { createSlice } from "@reduxjs/toolkit";



const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      ...state,
      expiry: Date.now() + 3600000,
    });
    localStorage.setItem("authState", serializedState);
  } catch {
    console.log("err")
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    if (parsedState.expiry && Date.now() > parsedState.expiry) {
      localStorage.removeItem("authState");
      return undefined;
    }
    return parsedState;
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || {
  users: [],
  currentUser: null,
  token: null,
  Uid: null,
  Role: null,
  Name: null,
  Email: null,
  teacher: null,
  isAuthenticated: false,
};

let logoutTimer;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload;
      saveState(state);

      if (state.isAuthenticated) {
        logoutTimer = setTimeout(() => {
          state.isAuthenticated = false;
          state.currentUser = null;
          state.token = null;
          state.Uid = null;
          state.Name = null;
          state.Role = null;
          state.Email = null;
          state.student = null;
          state.teacher = null;
          localStorage.removeItem("authState");
          // localStorage.removeItem("clerkAuthToken");
          // localStorage.removeItem("adminAuthToken");

          saveState(state);
        }, 3600000); // 1 hour
      }
    },
    setUserInfo: (state, action) => {
      const { user, token, Uid, Name, Role, Dept, Email, student, teacher } = action.payload;
      state.currentUser = user;
      state.token = token;
      state.Uid = Uid;
      state.Name = Name;
      state.Role = Role;
      state.Dept = Dept;
      state.Email = Email;
      state.teacher = Email;
      state.isAuthenticated = true;
      state.student = student;
      const existingUserIndex = state.users.findIndex((u) => u.Uid === Uid);
      if (existingUserIndex !== -1) {
        state.users[existingUserIndex] = {
          user,
          token,
          Uid,
          Name,
          Role,
          Email, student, teacher
        };
      } else {
        state.users.push({
          user,
          token,
          Uid,
          Name,
          Role,
          Email,
          student,
          teacher
        });
      }

      saveState(state);

      if (state.isAuthenticated) {
        if (logoutTimer) clearTimeout(logoutTimer);
        logoutTimer = setTimeout(() => {
          state.isAuthenticated = false;
          state.currentUser = null;
          state.token = null;
          state.Uid = null;
          state.Name = null;
          state.Role = null;
          state.Email = null;
          state.student = null;
          state.teacher = null;

          localStorage.removeItem("authState");
          localStorage.removeItem("clerkAuthToken");
          localStorage.removeItem("adminAuthToken");

          saveState(state);
        }, 36000000); // 10 hour 
      }
    },
    logOut: (state) => {
      state.currentUser = null;
      state.token = null;
      state.Uid = null;
      state.Name = null;
      state.Role = null;
      state.Dept = null;
      state.Email = null;
      state.student = null;
      state.teacher = null;
      state.isAuthenticated = false;

      localStorage.removeItem("authState");
      localStorage.removeItem("clerkAuthToken");
      localStorage.removeItem("adminAuthToken");

      if (logoutTimer) clearTimeout(logoutTimer);
    },
  },
});
const jobInitialState = {
  jobs: [],
  loading: false,
};
const jobSlice = createSlice({
  name: 'job',
  initialState: jobInitialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { authenticate, setUserInfo, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
export { loadState };
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUid = (state) => state.auth.Uid;
export const selectCurrentName = (state) => state.auth.Name;
export const selectCurrentRole = (state) => state.auth.Role;
export const selectCurrentDept = (state) => state.auth.Dept;
export const selectCurrentstudent = (state) => state.auth.student;
export const selectCurrentteacher = (state) => state.auth.teacher;
export const selectAllUsers = (state) => state.auth.users;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const { setJobs, setLoading } = jobSlice.actions;

export const setUsers = (users) => ({
  type: "auth/setUsers",
  payload: users,
});
export const jobReducer = jobSlice.reducer;