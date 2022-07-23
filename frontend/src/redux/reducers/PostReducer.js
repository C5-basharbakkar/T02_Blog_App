import { createSlice } from "@reduxjs/toolkit";

export const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    removePosts: (state, action) => {
      state.posts = state.posts.filter((post) => {
        return post.id !== action.payload;
      });
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPosts: (state, action) => {
      console.log(action.payload);
      state.posts = [action.payload, ...state.posts];
    },
    editPosts: (state, action) => {
      console.log(action.payload);
     state.posts= state.posts.map((post, index) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
  
            body: action.payload.body,
          };
        }
        return post;
      });
    },
  },

  
});

export const { editPosts, setPosts, removePosts, addPosts } =
  PostsSlice.actions;

export default PostsSlice.reducer;
