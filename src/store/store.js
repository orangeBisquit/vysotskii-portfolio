import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    form: formReducer,
  },
});
