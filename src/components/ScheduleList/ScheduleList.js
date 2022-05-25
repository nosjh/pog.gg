import React from "react";
import "../../styles/ScheduleList.scss";

function ScheduleList({ schedule }) {
  const { Day, TeamAKey, TeamBKey, TeamAScore, TeamBScore } = schedule;

  const Date = schedule.map((index) => {
    if (index % 2 == 0) {
      return Day;
    }
  });

  //   const ScoreA = TeamAScore.map((n) => {
  //     if (n === 3) {
  //       return n - 1;
  //     } else {
  //       return n;
  //     }
  //   });

  //   const ScoreB = TeamBScore.map((n) => {
  //     if (n === 3) {
  //       return n - 1;
  //     } else {
  //       return n;
  //     }
  //   });

  return (
    <div className="info-schedule">
      <div className="date Pretendard-Regular font-14">{Date}</div>
      <div className="info-match Poppins-Medium font-14">
        <div className="teamA">
          <div className="NameA">{TeamAKey}</div>
          <div className="logoA">
            <img src={`img/team_logo/${TeamAKey}.png`} />
          </div>
        </div>
        <div className="score">
          <div className="scoreA font-18">{TeamAScore}</div>
          <div className="vs">vs</div>
          <div className="scoreB font-18">{TeamBScore}</div>
        </div>
        <div className="teamB">
          <div className="logoB">
            <img src={`img/team_logo/${TeamBKey}.png`} />
          </div>
          <div className="NameB">{TeamBKey}</div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleList;
