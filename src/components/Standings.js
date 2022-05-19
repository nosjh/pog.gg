import React from "react";
import "../styles/Standings.scss";

function Standings(props) {
  return (
    <div className="standings-container">
      <div className="info-name Poppins-Regular font-12">
        <div>RANK</div>
        <div>CLUB</div>
        <div>POINT</div>
        <div>SET W-L</div>
        <div>W-L</div>
      </div>
      <div className="info-team Poppins-Medium font-12">rank</div>
    </div>
  );
}

export default Standings;
