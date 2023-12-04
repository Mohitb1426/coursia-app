import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPauseQuizTotalTime, setQuizTimeLeft } from '../screens/QuizQuestionScreen/actionQuizQuestion';
import { TIMER_CONSTANTS } from './constantsTimer';

export function useQuizTimeHook() {
  const dispatch = useDispatch();
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { activeQuizTime } = quizUnitState;
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const [countdownSeconds, setCountdownSeconds] = useState(activeQuizTime);
  const countdownTimerId = useRef(null);
  const { pausedQuizTotalTime } = quizQuestionState;
  const [isRunning, setIsRunning] = useState(false);
  const [quizTimerState, setQuizTimerState] = useState(TIMER_CONSTANTS.INITIAL);

  const playQuizTime = () => {
    countdownTimerId.current = setTimeout(() => {
      setCountdownSeconds(countdownSeconds - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      if (countdownSeconds > 0) {
        playQuizTime();
        dispatch(setQuizTimeLeft(countdownSeconds));
      } else if (countdownSeconds === 0) {
        dispatch(setQuizTimeLeft(0));
        setIsRunning(false);
        clearTimeout(countdownTimerId.current);
      }
    }
  }, [countdownSeconds, isRunning]);

  useEffect(() => {
    return () => {
      setIsRunning(false);
      clearTimeout(countdownTimerId.current);
    };
  }, []);

  useEffect(() => {
    if (quizTimerState === TIMER_CONSTANTS.START) {
      startQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.API_INITIATED) {
      pauseQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.API_DATA_FETCHED) {
      resumeQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.PAUSE) {
      pauseQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.RESUME) {
      resumeQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.SECTION_SUBMITTED) {
      resumeQuizTimer();
    } else if (quizTimerState === TIMER_CONSTANTS.FAILED_API_CALL) {
      resumeQuizTimer();
    }
  }, [quizTimerState]);

  const startQuizTimer = () => {
    setIsRunning(true);
  };
  const pauseQuizTimer = () => {
    setIsRunning(false);
    clearTimeout(countdownTimerId.current);
    dispatch(setPauseQuizTotalTime(countdownSeconds));
  };
  const resumeQuizTimer = () => {
    setCountdownSeconds(pausedQuizTotalTime);
    setIsRunning(true);
  };

  return { setQuizTimerState };
}
