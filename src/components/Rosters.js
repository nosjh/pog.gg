import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/Rosters.scss';
import RosterT1Container from '../containers/RosterT1Container';
// import RosterList from './rosters/RosterList';
// import Rosters_t1 from './rosters/Rosters_t1';

function Rosters() {
  // 선택버튼
  const [teamId, setTeamId] = useState('100000231');
  useEffect(() => {
    $('.default_option').click(function () {
      $(this).parent().toggleClass('active');
    });

    $('.select_ul li').click(function () {
      var currentele = $(this).html();
      $('.default_option li').html(currentele);
      $(this).parents('.select_wrap').removeClass('active');
    });

    $('.option').click(function () {
      // console.log($(this).attr('id').val());
      // $('.rosters').hide();
      // $('#' + $(this).val()).show();
    });
  });

  const handleClick = (id) => {
    // console.log('test');
    // console.log(id);
    setTeamId(id);
  };

  return (
    <div className="rosters-container">
      {/* 선택버튼 */}
      <div className="select_wrap Poppins-Medium font-12" id="team-selector">
        <ul className="default_option">
          <li>
            <div className="option">
              <img src={`img/lck.svg`} />
              <div>SELECT TEAM</div>
            </div>
          </li>
        </ul>
        <ul className="select_ul">
          <li>
            {/* <div value="t1" id="100000231" className="option"> */}
            <div
              value="t1"
              className="option"
              // onClick={() => {
              //   handleClick('100000231');
              // }}
            >
              <img src={`img/team_logo/T1.png`} />
              <div>T1</div>
            </div>
          </li>
          <li>
            {/* <div id="100000064" className="option"> */}
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000064');
              // }}
            >
              <img src={`img/team_logo/GEN.png`} />
              <div>Gen.G</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000154');
              // }}
            >
              {/* <div id="100000154" className="option"> */}
              <img src={`img/team_logo/DK.png`} />
              <div>DWG KIA</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000001');
              // }}
            >
              {/* <div id="100000001" className="option"> */}
              <img src={`img/team_logo/KDF.png`} />
              <div>Kwangdong Freecs</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000064');
              // }}
            >
              {/* <div id="100000064" className="option"> */}
              <img src={`img/team_logo/GEN.png`} />
              <div>Gen.G</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000230');
              // }}
            >
              {/* <div id="100000230" className="option"> */}
              <img src={`img/team_logo/DRX.png`} />
              <div>DRX</div>
            </div>
          </li>{' '}
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000435');
              // }}
            >
              {/* <div id="100000435" className="option"> */}
              <img src={`img/team_logo/BRO.png`} />
              <div>Fredit BRION</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000230');
              // }}
            >
              {/* <div id="100000230" className="option"> */}
              <img src={`img/team_logo/KT.png`} />
              <div>kt Rolster</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000436');
              // }}
            >
              {/* <div id="100000436" className="option"> */}
              <img src={`img/team_logo/NS.png`} />
              <div>NongShim REDFORCE</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000155');
              // }}
            >
              {/* <div id="100000155" className="option"> */}
              <img src={`img/team_logo/LSB.png`} />
              <div>Liiv SANDBOX</div>
            </div>
          </li>
          <li>
            <div
              className="option"
              // onClick={() => {
              //   handleClick('100000066');
              // }}
            >
              {/* <div id="100000066" className="option"> */}
              <img src={`img/team_logo/HLE.png`} />
              <div>Hanwha Life Esports</div>
            </div>
          </li>
        </ul>
      </div>

      {/* 선수 정보 */}
      <div>
        <RosterT1Container id="t1" className="rosters" teamId={teamId} />
      </div>
    </div>
  );
}

export default Rosters;
