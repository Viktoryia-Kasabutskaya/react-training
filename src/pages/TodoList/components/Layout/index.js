import PropTypes from "prop-types";

import CreateTodoForm from "../CreateTodoForm";
import TodoItem from "../TodoItem";
import EditTodoItem from "../EditTodoItem";

import styles from "./styles.module.scss";

const Layout = ({
  todos,
  taskText,
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
        taskText={taskText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <div className={styles.todosArea}>
        {todos.map(({ id, text, isCompleted, isEditMode }, index) => {
          return isEditMode ? (
            <EditTodoItem
              key={id}
              taskText={text}
              taskNumber={index + 1}
              id={id}
              handleCancel={handleTaskCancel}
              handleSave={handleTaskSave}
            />
          ) : (
            <TodoItem
              key={id}
              id={id}
              taskText={text}
              isCompleted={isCompleted}
              taskNumber={index + 1}
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
