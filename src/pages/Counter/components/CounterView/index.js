import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  isEven,
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "#a03696" : "#f0a5ed" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.display}>
        Kind of number: {isEven ? "Even" : "Odd"}
      </div>
      <div className={styles.controlButtons}>
        <div className={styles.controlButton} onClick={handleDecrement}>
          -
        </div>
        <div className={styles.controlButton} onClick={handleReset}>
          Reset
        </div>
        <div className={styles.controlButton} onClick={handleIncrement}>
          +
        </div>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  isEven: PropTypes.bool.isRequired,
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CounterView;
