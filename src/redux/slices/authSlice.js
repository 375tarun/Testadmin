import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL =  "https://testplatformserver.onrender.com/api/adminAuth"; // Adjust based on your backend

// Load token & user data from localStorage (if available)    "http://localhost:8080/api/adminAuth" ||
const token = localStorage.getItem("token") || null;
const user = token ? JSON.parse(localStorage.getItem("user")) : null;

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (!response.ok) throw new Error(data.message || "Login failed");

      // Store token & user data in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard after successful login
      window.location.href = "/";

      return { user: data.user, token: data.token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for registration
export const registerUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Logout action
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(authSlice.actions.logout());
    window.location.href = "/login"; // Redirect to login page after logout
  }
);

// Create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user, token, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
