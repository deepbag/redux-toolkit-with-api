import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loader: false,
  data1: [],
  data2: [],
  error: "",
};

export const testAPIget = createAsyncThunk(
  "test/api/get",
  async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
    return await axios
      .get("http://localhost:4000/api/get")
      .then((response) => {
        return fulfillWithValue(response.data);
      })
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const testAPIPost = createAsyncThunk(
  "test/api/post",
  async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
    return await axios
      .post("http://localhost:4000/api/post", data)
      .then((response) => {
        return fulfillWithValue(response.data);
      })
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const apiSlices = createSlice({
  name: "counter",
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(testAPIget.pending, (state, action) => {
    //   state.loader = true;
    // });
    // builder.addCase(testAPIget.fulfilled, (state, action) => {
    //   console.log(action);
    //   state.loader = false;
    //   state.data = action.payload;
    // });
    // builder.addCase(testAPIget.rejected, (state, action) => {
    //   state.loader = false;
    //   state.error = action.payload.message;
    // });

    // builder.addCase(testAPIPost.pending, (state, action) => {
    //   state.loader = true;
    // });
    // builder.addCase(testAPIPost.fulfilled, (state, action) => {
    //   console.log(action);
    //   state.loader = false;
    //   state.data = action.payload;
    // });
    // builder.addCase(testAPIPost.rejected, (state, action) => {
    //   state.loader = false;
    //   state.error = action.payload.message;
    // });
    builder.addMatcher(
      isAnyOf(testAPIget.pending, testAPIPost.pending),
      (state, action) => {
        state.loader = true;
      }
    );
    builder.addMatcher(isAnyOf(testAPIget.fulfilled), (state, action) => {
      state.loader = false;
      state.data1 = action.payload;
    });
    builder.addMatcher(isAnyOf(testAPIPost.fulfilled), (state, action) => {
      state.loader = false;
      state.data2 = action.payload;
    });
    builder.addMatcher(
      isAnyOf(testAPIget.rejected, testAPIPost.rejected),
      (state, action) => {
        state.loader = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default apiSlices.reducer;
