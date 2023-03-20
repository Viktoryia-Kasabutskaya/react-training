import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const CustomAccordion = ({
  children,
  expanded,
  onChange,
  taskText,
  taskTitle,
}) => {
  return (
    <div>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>{taskTitle}</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>{taskText}</div>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

CustomAccordion.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomAccordion;
