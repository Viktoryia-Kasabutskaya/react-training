import PropTypes from "prop-types";

import CounterView from "components/CounterView";

import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleAddCounter,
  handleRemoveAllCounter,
  handleRemoveCounter,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  sumOfValues,
}) => {
  const average = sumOfValues > 0 ? sumOfValues / counters.length : 0;

  return (
    <div>
      <div className={styles.items}>
        <div className={styles.buttons}>
          <button onClick={handleAddCounter} className={styles.button}>
            Add Counter
          </button>
          <button onClick={handleRemoveAllCounter} className={styles.button}>
            Reset
          </button>
        </div>
        <p className={styles.text}>Number of counters: {counters.length}</p>
        <p className={styles.text}>Sum of values of counters: {sumOfValues}</p>
        <p className={styles.text}>Average value of counters: {average}</p>
      </div>
      <div className={styles.counters}>
        {counters.map(({ countValue, id }) => (
          <CounterView
            key={id}
            id={id}
            counterValue={countValue}
            handleIncrement={handleCounterIncrement}
            handleDecrement={handleCounterDecrement}
            handleReset={handleCounterReset}
            handleRemove={handleRemoveCounter}
          />
        ))}
      </div>
    </div>
  );
};

Layout.protoTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      counterValue: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleAddCounter: PropTypes.func.isRequired,
  handleRemoveAllCounter: PropTypes.func.isRequired,
  handleRemoveCounter: PropTypes.func.isRequired,
};

export default Layout;
