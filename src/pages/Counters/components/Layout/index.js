import PropTypes from "prop-types";

import CounterView from "../../../../components/CounterView";

import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleAddCounter,
  handleRemoveAllCounter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <div className={styles.items}>
        <button onClick={handleAddCounter} className={styles.button}>
          Add Counter
        </button>
        <button onClick={handleRemoveAllCounter} className={styles.button}>
          Reset
        </button>
        <p className={styles.text}>Number of counters</p>
        <p className={styles.text}>Sum of values of counters</p>
        <p className={styles.text}>Average value of counters</p>
      </div>
      {counters.map(({ countValue, id }) => (
        <CounterView
          key={id}
          id={id}
          counterValue={countValue}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      ))}
    </div>
  );
};

Layout.protoTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      counterValue: PropTypes.number.isRequired,
    })
  ),
};

export default Layout;
