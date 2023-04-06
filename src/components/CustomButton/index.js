import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick, disabled = false }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      color="secondary"
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomButton;
