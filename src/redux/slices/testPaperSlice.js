import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the API endpoint (update with your actual backend URL)
const API_URL = "http://localhost:8080/api/test";

// Thunk for creating a test paper
export const createTestPaper = createAsyncThunk(
  'testPapers/createTestPaper',
  async (testPaperData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPaperData),
      });

      if (!response.ok) {
        throw new Error('Failed to create test paper');
      }

      const data = await response.json();
      return data; // Successfully created test paper data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for fetching all test papers
export const getTestPapers = createAsyncThunk(
  'testPapers/getTestPapers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch test papers');
      }

      const data = await response.json();
      return Array.isArray(data) ? data : data.tests || [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const testPaperSlice = createSlice({
  name: 'testPapers',
  initialState: {
    testPapers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Test Paper Cases
      .addCase(createTestPaper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTestPaper.fulfilled, (state, action) => {
        state.testPapers.push(action.payload.newTest);
        state.loading = false;
      })
      .addCase(createTestPaper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Get All Test Papers Cases
      .addCase(getTestPapers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTestPapers.fulfilled, (state, action) => {
        state.loading = false;
        state.testPapers = action.payload;
      })
      .addCase(getTestPapers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default testPaperSlice.reducer;
