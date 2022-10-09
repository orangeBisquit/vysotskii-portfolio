import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    projectsType: 'all',
    sortType: 'new-first',
  },
  reducers: {
    setProjectsType: (state, action) => {
      state.projectsType = action.payload;
    },
    setSort: (state, action) => {
      state.sortType = action.payload;
    }
  },
});

export const { setProjectsType, setSort } = formSlice.actions

export default formSlice.reducer;