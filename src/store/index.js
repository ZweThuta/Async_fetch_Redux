import {configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";

const store = configureStore({
  reducer: { todo: todoReducer },
});

export default store;
