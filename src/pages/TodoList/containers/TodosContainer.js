import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks";

import {
  createTask,
  removeTask,
  completeTask,
  editTask,
  undoTask,
  saveTask,
} from "../reducers";
import { sortedTasksSelector } from "../selectors";
import Layout from "../components/Layout";

const TodosContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(sortedTasksSelector);

  const { form, handleChange, handleReset } = useForm({ taskText: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTask(form));

    handleReset();
  };

  const handleTaskRemove = (id) => {
    dispatch(removeTask(id));
  };

  const handleTaskComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleTaskEdit = (id) => {
    dispatch(editTask(id));
  };

  const handleTaskEditCancel = (id) => {
    dispatch(undoTask(id));
  };

  const handleTaskSave = (taskData) => {
    dispatch(saveTask(taskData));
  };

  return (
    <div>
      <Layout
        todos={todos}
        taskText={form.taskText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleTaskDelete={handleTaskRemove}
        handleTaskComplete={handleTaskComplete}
        handleTaskEdit={handleTaskEdit}
        handleTaskCancel={handleTaskEditCancel}
        handleTaskSave={handleTaskSave}
      />
    </div>
  );
};

export default TodosContainer;
