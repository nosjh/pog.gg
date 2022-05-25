import React from "react";
import "../styles/Rosters.scss";

function Rosters() {
  return (
    <div className="rosters-container">
      <button className="team-select">
        <img src={process.env.PUBLIC_URL + "/img/team_logo/100000230.png"} />
        <p>DRX</p>
        <ul>
          <li></li>
        </ul>
      </button>
    </div>
  );
}

export default Rosters;
