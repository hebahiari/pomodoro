import React from "react";
import { minutesToDuration } from "../utils/duration";

function AdjustDurations({
  session,
  focusDuration,
  breakDuration,
  setFocusDuration,
  setBreakDuration,
}) {
  const handleTimeChange = (event) => {
    if (!session) {
      if (
        event.target.getAttribute("data-testid") === "increase-focus" ||
        event.target.parentNode.getAttribute("data-testid") === "increase-focus"
      ) {
        setFocusDuration(Math.min(60, focusDuration + 5));
      } else if (
        event.target.getAttribute("data-testid") === "decrease-focus" ||
        event.target.parentNode.getAttribute("data-testid") === "decrease-focus"
      ) {
        setFocusDuration(Math.max(5, focusDuration - 5));
      } else if (
        event.target.getAttribute("data-testid") === "decrease-break" ||
        event.target.parentNode.getAttribute("data-testid") === "decrease-break"
      ) {
        setBreakDuration(Math.max(1, breakDuration - 1));
      } else if (
        event.target.getAttribute("data-testid") === "increase-break" ||
        event.target.parentNode.getAttribute("data-testid") === "increase-break"
      ) {
        setBreakDuration(Math.min(15, breakDuration + 1));
      }
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleTimeChange}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleTimeChange}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleTimeChange}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleTimeChange}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdjustDurations;
