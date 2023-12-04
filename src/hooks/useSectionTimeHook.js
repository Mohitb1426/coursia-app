import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPauseActiveSectionTime, setSectionTimeLeft } from '../screens/QuizQuestionScreen/actionQuizQuestion';
import { TIMER_CONSTANTS } from './constantsTimer';

export function useSectionTimeHook() {
  const dispatch = useDispatch();
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const { activeQuestionsData } = quizInstructionsState;
  const { activeSectionTime, activeSectionId } = activeQuestionsData;
  const [countdownSeconds, setCountdownSeconds] = useState(activeSectionTime);
  const { pausedQuizActiveSectionLeftTime } = quizQuestionState;
  const [isRunning, setIsRunning] = useState(false);
  const countDownId = useRef(null);
  const [sectionTimerState, setSectionTimerState] = useState(TIMER_CONSTANTS.INITIAL);
  const previousSectionId = useRef(activeSectionId);
  const currentSectionId = useRef(activeSectionId);

  const playSectionTime = () => {
    countDownId.current = setTimeout(() => {
      setCountdownSeconds(countdownSeconds - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      if (countdownSeconds > 0) {
        playSectionTime();
        dispatch(setSectionTimeLeft(countdownSeconds));
      } else if (countdownSeconds === 0) {
        dispatch(setSectionTimeLeft(0));
        setIsRunning(false);
        clearTimeout(countDownId.current);
      }
    }
  }, [countdownSeconds, isRunning]);

  useEffect(() => {
    return () => {
      setIsRunning(false);
      clearTimeout(countDownId.current);
    };
  }, []);

  useEffect(() => {
    if (sectionTimerState === TIMER_CONSTANTS.START) {
      startSectionTimer();
    } else if (sectionTimerState === TIMER_CONSTANTS.API_INITIATED) {
      pauseSectionTimer();
    } else if (sectionTimerState === TIMER_CONSTANTS.API_DATA_FETCHED) {
      resumeSectionTimer();
    } else if (sectionTimerState === TIMER_CONSTANTS.PAUSE) {
      pauseSectionTimer();
    } else if (sectionTimerState === TIMER_CONSTANTS.RESUME) {
      resumeSectionTimer();
    } else if (sectionTimerState === TIMER_CONSTANTS.FAILED_API_CALL) {
      resumeSectionTimer();
    }
  }, [sectionTimerState]);

  useEffect(() => {
    currentSectionId.current = activeSectionId;
    if (previousSectionId.current !== currentSectionId.current) {
      restartSectionTimer();
    }
  }, [activeSectionId]);

  const restartSectionTimer = () => {
    // console.log('Hit 1');
    setIsRunning(false);
    clearTimeout(countDownId.current);
    dispatch(setSectionTimeLeft(activeSectionTime));
    setCountdownSeconds(activeSectionTime);
    setIsRunning(true);
  };

  const startSectionTimer = () => {
    setIsRunning(true);
  };
  const pauseSectionTimer = () => {
    setIsRunning(false);
    clearTimeout(countDownId.current);
    dispatch(setPauseActiveSectionTime(countdownSeconds));
  };
  const resumeSectionTimer = () => {
    // console.log('Hit 2');
    setCountdownSeconds(pausedQuizActiveSectionLeftTime);
    setIsRunning(true);
  };

  return { setSectionTimerState, previousSectionId, currentSectionId };
}
