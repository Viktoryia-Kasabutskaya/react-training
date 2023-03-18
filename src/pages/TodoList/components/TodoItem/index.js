import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskText,
  taskNumber,
  isCompleted,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>{taskNumber}</div>
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
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  taskNumber: PropTypes.number.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TodoItem;
