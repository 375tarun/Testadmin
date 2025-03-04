import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace with your actual API endpoint
const API_URL =  "https://testplatformserver.onrender.com/api/test";
// const API_URL = "http://localhost:8080/api/test";

// Thunk for fetching a specific test paper by ID
export const getTestPaperById = createAsyncThunk(
  'testPapers/getTestPaperById',
  async (testId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${testId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
           "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch test paper');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for creating a test paper
export const createTestPaper = createAsyncThunk(
  'testPapers/createTestPaper',
  async (testPaperData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(testPaperData),
      });

      if (!response.ok) {
        throw new Error('Failed to create test paper');
      }

      const newTestPaper = await response.json();

      // 🔄 Fetch updated test papers list
      dispatch(getTestPapers());

      return newTestPaper;
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
           "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch test papers');
      }

      const data = await response.json();
      return Array.isArray(data.tests) ? data.tests : []; // Ensure an array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for deleting a test paper
export const deleteTestPaper = createAsyncThunk(
  'testPapers/deleteTestPaper',
  async (testId, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/${testId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
           "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete test paper');
      }

      // 🔄 Fetch updated test papers after deletion
      dispatch(getTestPapers());

      return testId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const testPaperSlice = createSlice({
  name: 'testPapers',
  initialState: {
    testPapers: [],
    selectedTestPaper: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedTestPaper: (state, action) => {
      state.selectedTestPaper = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Create Test Paper Cases
      .addCase(createTestPaper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTestPaper.fulfilled, (state, action) => {
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
      })

      // Get Specific Test Paper by ID
      .addCase(getTestPaperById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedTestPaper = null;
      })
      .addCase(getTestPaperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTestPaper = action.payload;
      })
      .addCase(getTestPaperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Test Paper Cases
      .addCase(deleteTestPaper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTestPaper.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTestPaper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedTestPaper } = testPaperSlice.actions;
export default testPaperSlice.reducer;
