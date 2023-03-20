import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const CustomInput = ({ value, type, name, placeholder, onChange }) => {
  return (
    <TextField
      defaultValue={value}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
