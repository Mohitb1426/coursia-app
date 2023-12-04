import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPausedTimerValue, setQuestionTimeLeft } from '../screens/QuizQuestionScreen/actionQuizQuestion';
import { TIMER_CONSTANTS } from './constantsTimer';

export function useQuestionTimeHook() {
  const dispatch = useDispatch();
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { isSectionTimerEnable } = quizUnitState;
  const quizQuestionsState = useSelector((state) => state.reducerQuizQuestion);
  const { pausedTimerValue } = quizQuestionsState;
  const { activeQuestionsData } = quizInstructionsState;
  const { activeQuestionSectionTime, activeSectionId } = activeQuestionsData;
  const [countdownTimer, setCountdownTimer] = useState(activeQuestionSectionTime);
  const countDownId = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [questionTimerState, setQuestionTimerState] = useState(TIMER_CONSTANTS.INITIAL);
  const previousSectionId = useRef(activeSectionId);
  const currentSectionId = useRef(activeSectionId);

  const playTimer = () => {
    countDownId.current = setTimeout(() => {
      setCountdownTimer(countdownTimer - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      if (countdownTimer > 0) {
        playTimer();
        dispatch(setQuestionTimeLeft(countdownTimer));
      } else if (countdownTimer === 0) {
        dispatch(setQuestionTimeLeft(0));
        setIsRunning(false);
        clearTimeout(countDownId.current);
      }
    }
  }, [countdownTimer, isRunning]);

  useEffect(() => {
    return () => {
      setIsRunning(false);
      clearTimeout(countDownId.current);
    };
  }, []);

  useEffect(() => {
    if (questionTimerState === TIMER_CONSTANTS.START) {
      setIsRunning(true);
    } else if (questionTimerState === TIMER_CONSTANTS.API_INITIATED) {
      pauseQuestionTimer();
    } else if (questionTimerState === TIMER_CONSTANTS.API_DATA_FETCHED) {
      restartQuestionTimer();
    } else if (questionTimerState === TIMER_CONSTANTS.PAUSE) {
      pauseQuestionTimer();
    } else if (questionTimerState === TIMER_CONSTANTS.RESUME) {
      resumeQuestionTimer();
    } else if (questionTimerState === TIMER_CONSTANTS.FAILED_API_CALL) {
      resumeQuestionTimer();
    }
  }, [questionTimerState]);

  useEffect(() => {
    currentSectionId.current = activeSectionId;
    if (previousSectionId.current !== currentSectionId.current && !isSectionTimerEnable) {
      setIsRunning(false);
      clearTimeout(countDownId.current);
      restartQuestionTimer();
    }
  }, [activeSectionId]);

  const restartQuestionTimer = () => {
    setCountdownTimer(activeQuestionSectionTime);
    setIsRunning(true);
  };

  const resumeQuestionTimer = () => {
    setCountdownTimer(pausedTimerValue);
    setIsRunning(true);
  };

  const pauseQuestionTimer = () => {
    setIsRunning(false);
    clearTimeout(countDownId.current);
    dispatch(setPausedTimerValue(countdownTimer));
  };

  return { setQuestionTimerState };
}
