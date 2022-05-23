import React from "react";
import "../../styles/StandingList.scss";

function StandingList({ standings }) {
  return (
    <div className="info-team">
      {standings.map((standing) => {
        return <div key={standing.TeamId}>{standing.Name}</div>;
      })}
    </div>
  );
}

export default StandingList;
