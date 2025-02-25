import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace with your actual API endpoint
const API_URL = "http://localhost:8080/api/question";

// Thunk for creating a question
export const createQuestion = createAsyncThunk(
  "questions/createQuestion",
  async (questionData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });

      if (!response.ok) {
        throw new Error("Failed to create question");
      }

      const newQuestion = await response.json();

      // 🔄 Fetch updated questions after creating one
      dispatch(fetchQuestions(questionData.testPaperId));

      return newQuestion;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch questions from API
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (testPaperId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${testPaperId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await response.json();

      return data.questions || []; // Ensure we return an array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Add this to your imports
export const deleteQuestion = createAsyncThunk(
  "questions/deleteQuestion",
  async (questionId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${questionId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete question");
      }

      return questionId; // Return the deleted question ID
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add this case inside extraReducers

// Redux Slice
const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions.push(action.payload);
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload; // Ensure fresh data is loaded
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.questions = state.questions.filter(q => q._id !== action.payload);
      })
      
  },
});

export default questionSlice.reducer;
