import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: [],
};

const todosSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createTask: (state, { payload: taskData }) => {
      const newTask = {
        id: uuid(),
        title: taskData.taskTitle,
        text: taskData.taskText,
        isCompleted: false,
        isEditMode: false,
      };

      state.tasks.unshift(newTask);
      return state;
    },
    removeTask: (state, { payload: taskId }) => {
      const taskIndex = state.tasks.findIndex(({ id }) => id === taskId);
      state.tasks.splice(taskIndex, 1);
    },
    completeTask: (state, { payload: taskId }) => {
      const foundTodo = state.tasks.find(({ id }) => id === taskId);
      foundTodo.isCompleted = true;
    },
    editTask: (state, { payload: taskId }) => {
      const foundTodo = state.tasks.find(({ id }) => id === taskId);
      foundTodo.isEditMode = true;
    },
    undoTask: (state, { payload: taskId }) => {
      const foundTodo = state.tasks.find(({ id }) => id === taskId);
      foundTodo.isEditMode = false;
    },
    saveTask: (state, { payload: updatedTask }) => {
      const { id: taskId, newText, newTitle } = updatedTask;
      const foundTodo = state.tasks.find(({ id }) => id === taskId);
      foundTodo.text = newText;
      foundTodo.title = newTitle;
      foundTodo.isEditMode = false;
    },
  },
});

export const {
  createTask,
  removeTask,
  completeTask,
  editTask,
  undoTask,
  saveTask,
} = todosSlice.actions;

export default todosSlice.reducer;
