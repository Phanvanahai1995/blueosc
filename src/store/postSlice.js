import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "get-posts",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "create-posts",
  async (body, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        body
      );

      return fulfillWithValue({ ...body, id: data.id });
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, _) => {
      state.loading = false;
      state.error = "Fetch posts fail";
    });
    builder.addCase(createPost.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload, ...state.posts];
    });
    builder.addCase(createPost.rejected, (state, _) => {
      state.loading = false;
      state.error = "Create post fail";
    });
  },
});

export default postSlice.reducer;
