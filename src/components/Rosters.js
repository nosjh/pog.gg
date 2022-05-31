import { useState } from "react";
import "../styles/Rosters.scss";
import RosterT1Container from "../containers/RosterT1Container";

const teams = [
  {
    Key: "T1",
    TeamId: "100000231",
  },
  {
    Key: "GEN",
    TeamId: "100000064",
  },
  {
    Key: "DK",
    TeamId: "100000154",
  },
  {
    Key: "KDF",
    TeamId: "100000001",
  },
  {
    Key: "DRX",
    TeamId: "100000230",
  },
  {
    Key: "BRO",
    TeamId: "100000435",
  },
  {
    Key: "KT",
    TeamId: "100000005",
  },
  {
    Key: "NS",
    TeamId: "100000436",
  },
  {
    Key: "LSB",
    TeamId: "100000155",
  },
  {
    Key: "HLE",
    TeamId: "100000066",
  },
];

function Rosters() {
  const [teamId, setTeamId] = useState("100000231");
  const [style, setStyle] = useState("optionList");

  const changeStyle = () => {
    style === "optionList"
      ? setStyle("optionListShow")
      : setStyle("optionList");
  };

  const handleClick = (id) => {
    setTeamId(id);
    changeStyle();
  };

  return (
    <div className="rosters-container">
      {/* 선택버튼 */}
      <div className="selectBox Poppins-Medium font-12">
        <button className="label" onClick={changeStyle}>
          <img src={`img/lck.svg`} alt="league logo" />
          SELECT TEAM
        </button>
        <ul className={style}>
          {teams.map((team) => (
            <li
              className="optionItem"
              key={team.Key}
              onClick={() => {
                handleClick(team.TeamId);
              }}
            >
              <img src={`img/team_logo/${team.TeamId}.png`} alt="team logo" />
              {team.Key}
            </li>
          ))}
        </ul>
      </div>
      {/* 선수 정보 */}
      <div>
        <RosterT1Container className="rosters" teamId={teamId} />
      </div>
    </div>
  );
}

export default Rosters;
