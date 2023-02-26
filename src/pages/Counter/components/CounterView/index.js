import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  isEven,
  counterValue,
  numericalValue,
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
      <div className={styles.display}>Kind of number: {numericalValue}</div>
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
  counterValue: PropTypes.number.isRequired,
  numericalValue: PropTypes.number,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CounterView;
