import React from "react";
import { secondsToDuration } from "../utils/duration";

function ProgressBar({ session, focusDuration, breakDuration }) {
  let displayedDuration = secondsToDuration(
    session?.label === "Focusing" ? focusDuration * 60 : breakDuration * 60
  );

  function calculatePercentage() {
    if (session && session.label === "Focusing") {
      return (
        ((focusDuration * 60 - session?.timeRemaining) / (focusDuration * 60)) *
        100
      );
    } else if (session && session.label === "On Break") {
      return (
        ((breakDuration * 60 - session?.timeRemaining) / (breakDuration * 60)) *
        100
      );
      }
  }

  if (session) {
    return (
      <>
        <div>
          <div className="row mb-2">
            <div className="col">
              <h2 data-testid="session-title">
                {session?.label} for {displayedDuration} minutes
              </h2>
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={calculatePercentage()}
                  style={{ width: calculatePercentage() + "%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default ProgressBar;
