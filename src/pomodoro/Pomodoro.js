import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import ProgressBar from "./ProgressBar";
import TimerControls from "./TimerControls";
import AdjustDurations from "./AdjustDurations";

function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

function nextSession(focusDuration, breakDuration) {

  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [session, setSession] = useState(null);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  let props = {
    session,
    setSession,
    breakDuration,
    setBreakDuration,
    focusDuration,
    setFocusDuration,
    isTimerRunning,
    setIsTimerRunning,
  };

  return (
    <div className="pomodoro">
      <AdjustDurations {...props} />
      <TimerControls {...props} />
      <ProgressBar {...props} />
    </div>
  );
}

export default Pomodoro;
