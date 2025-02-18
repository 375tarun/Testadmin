// redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/adminAuth"; // Change as per your backend

export const loginUser = createAsyncThunk("adminAuth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("successfully login",data)
    if (!response.ok) throw new Error(data.message || "Login failed");
    return data;
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk("adminAuth/signup", async (userData, { rejectWithValue }) => {
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
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(registerUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export default authSlice.reducer;
