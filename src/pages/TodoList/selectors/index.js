import { createSelector } from "@reduxjs/toolkit";

const todosSelector = (store) => store.todoList;

export const tasksSelector = createSelector(
  todosSelector,
  (todoList) => todoList.tasks
);

export const sortedTasksSelector = createSelector(tasksSelector, (todoList) => {
  const copy = structuredClone(todoList);
  return copy.sort((current, next) => current.isCompleted - next.isCompleted);
});
