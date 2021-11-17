import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    tabsInfo: [
      {
        name: "Activity",
        link: "/activity",
      },
      {
        name: "Archive",
        link: "/archive",
      },
    ],
    activityData: [],
  },
  reducers: {
    storeData(state, action) {
      state.activityData = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
