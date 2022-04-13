import "./Task.css";

import React from "react";

const Task = ({ countType, streakNumber, taskName }) => {
  // Task type
  // Increasing: Surviver -- type of win streak to maintain as long as you're alive
  // Decreasing: Against the clock -- couting the days until finish a streak in order to win

  // taskName cannot have more than 36 characters

  // Calculate streak percentage done (in case there is endpoit)
  const percentCompleted = 50;

  const style = {
    background: `conic-gradient(#e46569 ${percentCompleted}%, #ecaf81 0%)`,
  };

  return (
    <div className="task">
      <p>{countType}</p>
      <div className="number" style={style}>
        <p>{streakNumber}</p>
      </div>
      <p>{taskName}</p>
      <div className="actions">
        <button>+</button>
        <button>-</button>
        <button>
          <img src="/reload.png" />
        </button>
      </div>
    </div>
  );
};

export default Task;
