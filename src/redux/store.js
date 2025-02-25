import { configureStore } from "@reduxjs/toolkit";
import testPapersReducer from "./slices/testPaperSlice";
import authReducer from "./slices/authSlice";
import questionsReducer from './slices/questionSlice';

const store = configureStore({
  reducer: {
    testPapers: testPapersReducer,
     auth: authReducer,
     questions: questionsReducer,
  },
});

export default store;
