import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    enableSidebar: (state) => {
      state.isSideBarOpen = true;
    },
    disableSidebar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { toggleSidebar, enableSidebar, disableSidebar } =
  AppSlice.actions;

export default AppSlice.reducer;
