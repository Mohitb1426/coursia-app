import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STOP_TIMER_CONSTANTS } from '../screens/QuizQuestionScreen/constantsScreenQuizQuestion';
import { setPauseScreenTime } from '../screens/QuizQuestionScreen/actionQuizQuestion';

export function useScreenTime() {
  const dispatch = useDispatch();
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const { stopTimer, pausedScreenTime } = quizQuestionState;
  const [screenTime, setScreenTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const screenTimeId = useRef(null);

  const playScreenTime = () => {
    screenTimeId.current = setTimeout(() => {
      setScreenTime(screenTime + 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      playScreenTime();
    }
  }, [screenTime, isRunning]);

  useEffect(() => {
    return () => {
      setIsRunning(false);
      clearTimeout(screenTimeId.current);
    };
  }, []);

  useEffect(() => {
    if (stopTimer === STOP_TIMER_CONSTANTS.STOP_THE_TIMER) {
      pauseScreenTime();
    } else if (stopTimer === STOP_TIMER_CONSTANTS.RESUME_THE_TIMER
      || stopTimer === STOP_TIMER_CONSTANTS.SECTION_SUBMITTED) {
      restartScreenTime();
    } else if (stopTimer === STOP_TIMER_CONSTANTS.FAILED_API_CALL) {
      resumeScreenTime();
    }
  }, [stopTimer]);

  const pauseScreenTime = () => {
    setIsRunning(false);
    clearTimeout(screenTimeId.current);
    dispatch(setPauseScreenTime(screenTime));
  };

  const restartScreenTime = () => {
    setScreenTime(0);
    setIsRunning(true);
  };

  const resumeScreenTime = () => {
    setScreenTime(pausedScreenTime);
    setIsRunning(true);
  };

  const startScreenTime = () => {
    setIsRunning(true);
  };

  return {
    screenTime,
    startScreenTime,
    pauseScreenTime,
    restartScreenTime,
  };
}
