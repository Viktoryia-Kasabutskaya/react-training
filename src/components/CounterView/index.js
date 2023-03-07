import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
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
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CounterView;
