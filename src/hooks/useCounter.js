import { useEffect, useState, useRef } from 'react';

const useCounter = () => {
  const countDownId = useRef(null);
  const [countDownTime, setCountDownTime] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const playTimer = () => {
    countDownId.current = setTimeout(() => {
      setCountDownTime(countDownTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      if (countDownTime > 0) {
        playTimer();
      } else if (countDownTime === 0) {
        setIsRunning(false);
        clearTimeout(countDownId.current);
      }
    }
    return () => {
      clearTimeout(countDownId.current);
    };
  }, [countDownTime, isRunning]);

  const startTimer = (value) => {
    setCountDownTime(value);
    setIsRunning(true);
  };
  const stopTimer = (value) => {
    setCountDownTime(value);
    setIsRunning(false);
    clearTimeout(countDownId.current);
  };

  return { countDownTime, startTimer, stopTimer };
};

export default useCounter;
