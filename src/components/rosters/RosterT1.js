import React from "react";
import "../../styles/Player.scss";

function RosterT1({ roster }) {
  const { PlayerId, CommonName, MatchName, Position, BirthDate, Nationality } =
    roster;

  const BirthDay = new Date(BirthDate);
  const year = BirthDay.getFullYear();
  const month = ("0" + (BirthDay.getMonth() + 1)).slice(-2);
  const day = ("0" + BirthDay.getDate()).slice(-2);
  let BirthString = year + "-" + month + "-" + day;
  if (BirthDate == null) {
    BirthString = "NO DATA";
  }

  return (
    <div>
      <div
        className="info-player-detail Poppins-Regular font-12"
        key={PlayerId}
      >
        {/* <div className="club">
          <img src={`img/team_logo/${TeamId}.png`} />
          <div>T1{Key}</div>
        </div> */}
        <div className="player">
          <img src={`img/player/${PlayerId}.png`} alt="player" />
        </div>
        <div className="player-name">
          <div>{MatchName}</div>
          <div>{CommonName}</div>
        </div>
        <div className="position">
          <img src={`img/position/${Position}.svg`} alt="position" />
        </div>
        <div className="nation">{Nationality}</div>
        <div className="birth">{BirthString}</div>
      </div>
    </div>
  );
}

export default RosterT1;
