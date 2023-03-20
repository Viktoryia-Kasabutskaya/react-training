import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomAccordion from "components/CustomAccordion";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskText,
  isExpanded,
  isCompleted,
  handleComplete,
  handleEdit,
  handleDelete,
  taskTitle,
  handleAccordionToggle,
}) => {
  return (
    <div className={styles.wrapper}>
      <CustomAccordion
        expanded={isExpanded}
        onChange={handleAccordionToggle}
        taskTitle={taskTitle}
        taskText={taskText}
      >
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
};

export default TodoItem;
