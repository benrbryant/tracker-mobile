import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});

export default store;
