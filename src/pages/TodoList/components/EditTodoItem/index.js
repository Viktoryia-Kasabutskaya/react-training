import PropTypes from "prop-types";

import { useForm } from "hooks";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import CustomAccordion from "components/CustomAccordion";

import styles from "./styles.module.scss";

const EditTodoItem = ({
  id,
  taskText,
  taskTitle,
  handleSave,
  handleCancel,
}) => {
  const { form, handleChange } = useForm({
    inputTitle: taskTitle,
    inputText: taskText,
  });
  console.log(form);

  return (
    <div>
      <CustomAccordion
        expanded
        title={form.inputTitle}
        renderTitle={() => (
          <CustomInput
            type="text"
            name="inputTitle"
            value={form.inputTitle}
            onChange={handleChange}
          />
        )}
      >
        <CustomInput
          type="text"
          name="inputText"
          value={form.inputText}
          onChange={handleChange}
        />
        <div className={styles.controlsArea}>
          <CustomButton
            text="Save"
            onClick={() =>
              handleSave({
                id,
                newTitle: form.inputTitle,
                newText: form.inputText,
              })
            }
          />
          <CustomButton text="Cancel" onClick={() => handleCancel(id)} />
        </div>
      </CustomAccordion>
    </div>
  );
};

EditTodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskTitle: PropTypes.string,
  taskText: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditTodoItem;
