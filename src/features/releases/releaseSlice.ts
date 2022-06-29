import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newReleasesService from "./releaseService";

type newReleases = {
  newReleases: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: any;
};

const initialState: newReleases = {
  newReleases: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// get all new releases
export const getAllNewReleases: any = createAsyncThunk(
  "/newReleases/fetchNewReleases",
  async (id, thunkAPI) => {
    try {
      return await newReleasesService();
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getAllNewReleases.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllNewReleases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newReleases = action.payload;
      })
      .addCase(getAllNewReleases.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = newReleasesSlice.actions;
export default newReleasesSlice.reducer;
