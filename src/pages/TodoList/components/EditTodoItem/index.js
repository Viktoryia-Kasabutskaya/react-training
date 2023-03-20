import PropTypes from "prop-types";

import { useForm } from "hooks";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";

import styles from "./styles.module.scss";

const EditTodoItem = ({ id, taskText, handleSave, handleCancel }) => {
  const { form, handleChange } = useForm({ inputValue: taskText });

  return (
    <div className={styles.wrapper}>
      <CustomInput
        type="text"
        name="inputValue"
        value={form.inputValue}
        onChange={handleChange}
      />
      <div className={styles.controlsArea}>
        <CustomButton
          text="Save"
          onClick={() => handleSave({ id, newText: form.inputValue })}
        />
        <CustomButton text="Cancel" onClick={() => handleCancel(id)} />
      </div>
    </div>
  );
};

EditTodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskText: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditTodoItem;
