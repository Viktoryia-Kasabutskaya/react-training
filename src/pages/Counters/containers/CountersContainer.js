import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

// import { useCounter } from "hooks";
import Layout from "../components/Layout";
import { useCounter } from "../../../hooks";

const CountersContainer = () => {
  const { countValue, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);

  const isDisabled = countValue === 0;

  const [counters, setCounters] = useState([]);

  const handleAddCounter = useCallback(() => {
    const newCounter = {
      countValue: 0,
      id: uuid(),
    };
    setCounters((state) => [...state, newCounter]);
  }, []);

  const handleRemoveAllCounter = useCallback(() => {
    setCounters((state) => []);
  }, []);

  const handleRemoveCounter = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndexToRemove = countersCopy.findIndex(
        (counter) => counter.id === id
      );
      countersCopy.splice(counterIndexToRemove, 1);
      return countersCopy;
    });
  }, []);

  return (
    <Layout
      counters={counters}
      counterValue={countValue}
      handleAddCounter={handleAddCounter}
      handleRemoveAllCounter={handleRemoveAllCounter}
      handleIncrement={handleIncrement}
      handleDecrement={isDisabled ? () => {} : handleDecrement}
      handleReset={handleReset}
      handleRemoveCounter={handleRemoveCounter}
    />
  );
};

export default CountersContainer;
