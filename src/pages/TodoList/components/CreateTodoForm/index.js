import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";

import styles from "./styles.module.scss";

const CreateTodoForm = ({
  taskText,
  taskTitle,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <CustomInput
        type="text"
        name="taskTitle"
        value={taskTitle}
        onChange={handleChange}
        placeholder="Write title of task"
      />
      <CustomInput
        type="text"
        name="taskText"
        value={taskText}
        onChange={handleChange}
        placeholder="Write description of task"
      />
      <CustomButton
        text="Create Task"
        disabled={!taskText}
        onClick={handleSubmit}
      />
    </form>
  );
};

CreateTodoForm.propTypes = {
  taskText: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateTodoForm;
