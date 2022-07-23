import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginReducer";
import AlbumReducer from "./reducers/AlbumReducer";
import commentReducer from "./reducers/Comments";
import postReducer from "./reducers/PostReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    login: loginReducer,
    album: AlbumReducer,
    comments: commentReducer,
  },
});
