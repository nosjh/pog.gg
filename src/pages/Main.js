import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../styles/Main.scss";
import "../styles/tab-menu.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Standings from "../components/Standings";
import Schedules from "../components/Schedules";
import Rosters from "../components/Rosters";

const content = [
  {
    tab: "정규 순위",
    content: <Standings />,
  },
  {
    tab: "리그 일정",
    content: <Schedules />,
  },
  {
    tab: "팀별 로스터",
    content: <Rosters />,
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  useEffect(() => {
    $("button").click(function () {
      $("button").removeClass("active");
      $(this).addClass("active");
    });
  });
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

function Main() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div>
      <Header />
      <div className="container">
        <select className="select-league Poppins-SemiBold font-32">
          <optgroup>
            <option>LCK</option>
          </optgroup>
        </select>
        <p className="legaue-name Poppins-Medium font-14">
          League of Legends Champions Korea
        </p>
        <select className="select-season Poppins-Medium font-14">
          <optgroup>
            <option>2022 Spring</option>
          </optgroup>
        </select>
        <div className="menu">
          {content.map((section, index) => (
            <button
              key={index}
              className={
                index == 0
                  ? "menu-btn Pretendard-Regular font-14 active"
                  : "menu-btn Pretendard-Regular font-14"
              }
              onClick={() => contentChange(index)}
            >
              {section.tab}
            </button>
          ))}
        </div>
        <div>{contentItem.content}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
