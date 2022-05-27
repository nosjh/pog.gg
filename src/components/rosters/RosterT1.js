import React from 'react';
import '../../styles/Player.scss';

function RosterT1({ roster }) {
  const { PlayerId, CommonName, MatchName, Position, BirthDate, Nationality } = roster;

  //   console.log(roster);
  return (
    <div>
      <div className="info-player-detail Poppins-Regular font-12" key={PlayerId}>
        <div className="club">
          <img src={`img/team_logo/T1.png`} />
          <div>T1</div>
        </div>
        <div className="player">
          <img src={`img/player/${PlayerId}.png`} />
        </div>
        <div className="player-name">
          <div>{MatchName}</div>
          <div>{CommonName}</div>
        </div>
        <div className="position">
          <img src={`img/position/${Position}.svg`} />
        </div>
        <div>{Nationality}</div>
        <div>{BirthDate}</div>
      </div>
    </div>
  );
}

export default RosterT1;
