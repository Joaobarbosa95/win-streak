import "./Dashboard.css";

import React from "react";

import Task from "./Task";

const Dashboard = () => {
  return (
    <div className="container-2">
      <h1>Welcome J</h1>
      <p>You have 10 tasks to complete</p>
      <div className="tasks-box">
        <div className="container-nav">
          <button>+</button>
        </div>
        <div className="tasks-container">
          <Task
            countType="Agains the clock"
            streakNumber="8"
            taskName="aweraw"
          />
          <Task countType="Surviver" streakNumber="8" taskName="aweraw" />
          <Task countType="Surviver" streakNumber="8" taskName="aweraw" />
          <Task
            countType="Surviver"
            streakNumber="8"
            taskName="awerawawerawerawerawerawrawerawerawe"
          />

          <Task countType="Surviver" streakNumber="8" taskName="aweraw" />
          <Task countType="Surviver" streakNumber="8" taskName="aweraw" />
          <Task countType="Surviver" streakNumber="8" taskName="aweraw" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
