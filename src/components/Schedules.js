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
        {schedules.map((schedule, idx) => {
          let scheduleNew;
          if (idx % 2 !== 0) {
            schedule.Day = "";
          }
          return <ScheduleList key={idx} schedule={schedule} />;
        })}
      </div>
    </div>
  );
}

export default Schedules;
