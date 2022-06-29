import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type newReleases = {
  newReleases: [];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
};

const initialState: newReleases = {
  newReleases: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const newReleasesSlice = createSlice({
  name: "newReleases",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = newReleasesSlice.actions;
export default newReleasesSlice.reducer;
