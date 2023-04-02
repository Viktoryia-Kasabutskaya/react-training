import PropTypes from "prop-types";

import CreateTodoForm from "../CreateTodoForm";
import TodoItem from "../TodoItem";
import EditTodoItem from "../EditTodoItem";

import styles from "./styles.module.scss";

const Layout = ({
  todos,
  taskText,
  taskTitle,
  handleSubmit,
  handleChange,
  handleTaskDelete,
  handleTaskComplete,
  handleTaskEdit,
  handleTaskCancel,
  handleTaskSave,
}) => {
  return (
    <div>
      <CreateTodoForm
        taskTitle={taskTitle}
        taskText={taskText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <div className={styles.todosArea}>
        {todos.map(({ id, title, text, isCompleted, isEditMode }) => {
          return isEditMode ? (
            <EditTodoItem
              key={id}
              taskTitle={title}
              taskText={text}
              id={id}
              handleCancel={handleTaskCancel}
              handleSave={handleTaskSave}
            />
          ) : (
            <TodoItem
              key={id}
              id={id}
              taskTitle={title}
              taskText={text}
              isCompleted={isCompleted}
              handleDelete={() => handleTaskDelete(id)}
              handleComplete={handleTaskComplete}
              handleEdit={handleTaskEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

Layout.propTypes = {
  taskTitle: PropTypes.string,
  taskText: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskComplete: PropTypes.func.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
  handleTaskCancel: PropTypes.func.isRequired,
  handleTaskSave: PropTypes.func.isRequired,
};

export default Layout;
