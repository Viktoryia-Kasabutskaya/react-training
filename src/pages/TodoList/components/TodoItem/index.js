import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomAccordion from "components/CustomAccordion";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskText,
  isCompleted,
  handleComplete,
  handleEdit,
  handleDelete,
  taskTitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <CustomAccordion
        title={taskTitle}
        renderTitle={(title) => (
          <p className={isCompleted ? styles.completed : ""}>{title}</p>
        )}
      >
        <div className={isCompleted ? styles.completed : ""}>{taskText}</div>
        <div className={styles.controlsArea}>
          <CustomButton
            text="Edit"
            disabled={isCompleted}
            onClick={() => handleEdit(id)}
          />
          <CustomButton
            text="Complete"
            disabled={isCompleted}
            onClick={() => handleComplete(id)}
          />
          <CustomButton text="Delete" onClick={() => handleDelete(id)} />
        </div>
      </CustomAccordion>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default TodoItem;
