import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    api.Schedules().then(function (response) {
      setSchedules(response);
    });
  }, []);

  return (
    <div className="schedul-container">
      <div>
        {schedules.map((schedule) => (
          <ScheduleList key={schedule.RoundId} schedule={schedule} />
        ))}
      </div>
    </div>
  );
}

export default Schedules;
