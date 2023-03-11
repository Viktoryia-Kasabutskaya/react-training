import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../components/Layout";

const CountersContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    const newCounter = {
      countValue: 0,
      id: uuid(),
    };
    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 === 0
              ? (counter.countValue += 1)
              : counter.countValue,
        };
      });
      updatedCounters.push(newCounter);
      return updatedCounters;
    });
  };

  const handleRemoveAllCounter = useCallback(() => {
    setCounters([]);
  }, []);

  const handleRemoveCounter = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndexToRemove = countersCopy.findIndex(
        (counter) => counter.id === id
      );
      countersCopy.splice(counterIndexToRemove, 1);
      return countersCopy.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 !== 0
              ? (counter.countValue -= 1)
              : counter.countValue,
        };
      });
    });
  }, []);

  const handleCounterIncrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);
      foundCounter.countValue += 1;
      return countersCopy;
    });
  }, []);

  const handleCounterDecrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);
      if (foundCounter.countValue > 0) {
        foundCounter.countValue -= 1;
      }
      return countersCopy;
    });
  }, []);

  const handleCounterReset = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);
      foundCounter.countValue = 0;
      return countersCopy;
    });
  }, []);

  const sumOfValues = counters.reduce(
    (result, { countValue }) => result + countValue,
    0
  );

  return (
    <Layout
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleRemoveAllCounter={handleRemoveAllCounter}
      handleRemoveCounter={handleRemoveCounter}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      sumOfValues={sumOfValues}
    />
  );
};

export default CountersContainer;
