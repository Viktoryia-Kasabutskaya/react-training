import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const CustomInput = ({ value, type, name, label, onChange }) => {
  return (
    <TextField
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      label={label}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
