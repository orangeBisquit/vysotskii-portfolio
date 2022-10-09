import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-api";

const initialState = {
  items: [],
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const projectsCollectionRef = collection(db, "/projects");
    const data = await getDocs(projectsCollectionRef);
    const projects = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    return projects;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
