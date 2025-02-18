import { configureStore } from "@reduxjs/toolkit";
import testPapersReducer from "./slices/testPaperSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    testPapers: testPapersReducer,
     auth: authReducer,
  },
});

export default store;
