import React from "react";
import "../../styles/StandingList.scss";

function StandingList({ standing }) {
  const {
    TeamId,
    Order,
    Name,
    Wins,
    Losses,
    ScoreFor,
    ScoreAgainst,
    ScoreDifference,
  } = standing;

  return (
    <div className="info-team Poppins-Medium font-12" key={TeamId}>
      <div>{Order}</div>
      <div>
        <img src={`img/team_logo/${TeamId}.png`} />
      </div>
      <div>{Name}</div>
      <div>
        {Wins}W{Losses}L
      </div>
      <div>
        {ScoreFor}W{ScoreAgainst}L
      </div>
      <div>{ScoreDifference}</div>
    </div>
  );
}

export default StandingList;
