import React from "react";



function ProgressBar({session, focusDuration, breakDuration}) {

    function secondsToTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        seconds = seconds.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
      }
      

    function calculatePercentage() {
        if (session && session.label === "Focusing") {
     return ((((focusDuration*60)-session?.timeRemaining)/(focusDuration*60))*100)
        } else if (session && session.label === "On Break") {
      return    ((((breakDuration*60)-session?.timeRemaining)/(breakDuration*60))*100)
        } else {
    }
      }

    if (session) {
    return (<>
        <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session?.label} for {secondsToTime(session?.label === "Focusing"? focusDuration*60 : breakDuration*60 )} minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          {/* <p className="lead" data-testid="session-sub-title">
            {secondsToTime(session?.timeRemaining)} remaining
          </p> */}
          <p className="lead" data-testid="session-sub-title">
          {secondsToTime(session?.timeRemaining)} remaining
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
            aria-valuenow={calculatePercentage()} // TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: calculatePercentage()+"%" }} // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
    </>)
}  else {
    return "";
  }
}

export default ProgressBar