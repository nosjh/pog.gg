import { useEffect, useState } from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
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

  // 선택버튼
  // const label = document.querySelector(".label");
  // const options = document.querySelectorAll(".optionItem");
  // const handleSelect = function (item) {
  //   label.innerHTML = item.textContent;
  //   label.parentNode.classList.remove("active");
  // };

  // options.forEach(function (option) {
  //   option.addEventListener("click", function () {
  //     handleSelect(option);
  //   });
  // });

  const handleClick = (id) => {
    // console.log('test');
    // console.log(id);
    setTeamId(id);
  };

  const changeStyle = () => {
    setStyle("optionListShow");
  };

  // label.addEventListener("click", function () {
  //   if (label.parentNode.classList.contains("active")) {
  //     label.parentNode.classList.remove("active");
  //   } else {
  //     label.parentNode.classList.add("active");
  //   }
  // });

  return (
    <div className="rosters-container">
      {/* 선택버튼 */}
      <div className="selectBox Poppins-Medium font-12">
        <button className="label" onClick={changeStyle}>
          <img src={`img/lck.svg`} />
          SELECT TEAM
        </button>
        <ul className={style}>
          {teams.map((team) => (
            <li className="optionItem" key={team.Key}>
              <img src={`img/team_logo/${team.TeamId}.png`} />
              {team.Key}
            </li>
          ))}
          {/* <li
            className="optionItem"
            onClick={() => {
              handleClick("100000064");
            }}
          >
            <img src={`img/team_logo/T1.png`} />
            T1
          </li>
          <li className="optionItem">
            <img src={`img/team_logo/GEN.png`} />
            Gen.G
          </li> */}
        </ul>
      </div>
      {/* 선수 정보 */}
      <div>
        {/* <RosterT1Container id="t1" className="rosters" teamId={teamId} /> */}
      </div>
    </div>
  );
}

export default Rosters;
