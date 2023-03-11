import PropTypes from "prop-types";
import { memo } from "react";

import styles from "./styles.module.scss";

const CounterView = ({
  id,
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  handleRemove,
}) => {
  const isEven = counterValue % 2 === 0;

  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "#b33ca7" : "#f0a5ed" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.display}>
        Kind of number: {isEven ? "Even" : "Odd"}
      </div>
      <div className={styles.controlButtons}>
        <button
          className={styles.controlButton}
          onClick={() => handleDecrement(id)}
        >
          -
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleReset(id)}
        >
          Reset
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
      </div>
      {handleRemove && <button onClick={() => handleRemove(id)}>Remove</button>}
    </div>
  );
};

CounterView.propTypes = {
  id: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default memo(CounterView);
