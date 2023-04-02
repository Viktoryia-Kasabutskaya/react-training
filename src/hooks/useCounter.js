import { useState, useCallback } from "react";

const useCounter = (initialValue) => {
  const [countValue, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((state) => state - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return {
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
