import { configureStore } from "@reduxjs/toolkit";
import newReleasesReducer from "../features/releases/releaseSlice";

export const store = configureStore({
  reducer: {
    newReleases: newReleasesReducer,
  },
});
