import React from "react";
import "../styles/Rosters.scss";
import drx from "../img/team_logo/100000230.png";

function Rosters() {
  return (
    <div className="rosters-container">
      <button className="team-select">
        <img src={drx} />
        <p>DRX</p>
        <ul>
          <li></li>
        </ul>
      </button>
    </div>
  );
}

export default Rosters;
