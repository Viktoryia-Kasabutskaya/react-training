import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "pages/TodoList/reducers";

export const store = configureStore({
  reducer: {
    todoList: todosReducer,
  },
});
