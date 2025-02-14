// testPapersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testPapers: [],
};

const testPapersSlice = createSlice({
  name: "testPapers",
  initialState,
  reducers: {
    addTestPaper: (state, action) => {
      state.testPapers.push(action.payload);
    },
    editTestPaper: (state, action) => {
      const { id, updatedTest } = action.payload;
      const index = state.testPapers.findIndex((test) => test.id === id);
      if (index !== -1) {
        state.testPapers[index] = { ...state.testPapers[index], ...updatedTest };
      }
    },
    removeTestPaper: (state, action) => {
      state.testPapers = state.testPapers.filter((test) => test.id !== action.payload);
    },
  },
});

export const { addTestPaper, editTestPaper, removeTestPaper } = testPapersSlice.actions;
export default testPapersSlice.reducer;
