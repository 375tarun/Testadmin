import { configureStore } from "@reduxjs/toolkit";
import testPapersReducer from "./slices/testPaperSlice";

const store = configureStore({
  reducer: {
    testPapers: testPapersReducer,
  },
});

export default store;
