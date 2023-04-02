import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const CustomAccordion = ({ children, expanded, renderTitle, title }) => {
  return (
    <div>
      <Accordion expanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {renderTitle(title)}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

CustomAccordion.propTypes = {
  title: PropTypes.string,
  expanded: PropTypes.bool,
  renderTitle: PropTypes.func,
};

export default CustomAccordion;
