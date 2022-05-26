import React from 'react';

function RosterList({ roster }) {
  const { PlayerId, CommonName, MatchName, Position, BirthDate, Nationality } = roster;

  return (
    <div>
      <div className="info-player" key={PlayerId}>
        <div>
          <img src={`img/team_logo/T1.png`} />
          <p>t1</p>
        </div>
        <div>
          <img src={`img/player/${PlayerId}.png`} />
        </div>
        <div>
          <div>{MatchName}</div>
          <div>{CommonName}</div>
        </div>
        <div>{Position}</div>
        <div>{Nationality}</div>
        <div>{BirthDate}</div>
      </div>
    </div>
  );
}

export default RosterList;
