import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/Rosters.scss';
// import RosterList from './rosters/RosterList';
// import Rosters_t1 from './rosters/Rosters_t1';

function Rosters() {
  // 선택버튼
  const [] = useState();
  useEffect(() => {
    $('.default_option').click(function () {
      $(this).parent().toggleClass('active');
    });

    $('.select_ul li').click(function () {
      var currentele = $(this).html();
      $('.default_option li').html(currentele);
      $(this).parents('.select_wrap').removeClass('active');
    });
  });

  // api
  // const [rosters, setRosters] = useState([]);
  // useEffect(() => {
  //   api.Rosters().then(function (response) {
  //     setRosters(response);
  //   });
  // }, []);

  return (
    <div className="rosters-container">
      {/* 선택버튼 */}
      <div class="select_wrap Poppins-Medium font-12">
        <ul class="default_option">
          <li>
            <div class="option">
              <img src={`img/lck.svg`} />
              <div>SELECT TEAM</div>
              <br/>
            </div>
          </li>
        </ul>
        <ul class="select_ul">
          <li>
            <div class="option">
              <img src={`img/team_logo/T1.png`} />
              <div>T1</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/GEN.png`} />
              <div>Gen.G</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/DK.png`} />
              <div>DWG KIA</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/KDF.png`} />
              <div>Kwangdong Freecs</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/GEN.png`} />
              <div>Gen.G</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/DRX.png`} />
              <div>DRX</div>
            </div>
          </li> <li>
            <div class="option">
            <img src={`img/team_logo/BRO.png`} />
              <div>Fredit BRION</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/KT.png`} />
              <div>kt Rolster</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/NS.png`} />
              <div>NongShim REDFORCE</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/LSB.png`} />
              <div>Liiv SANDBOX</div>
            </div>
          </li>
          <li>
            <div class="option">
            <img src={`img/team_logo/HLE.png`} />
              <div>Hanwha Life Esports</div>
            </div>
          </li>
        </ul>
      </div>

      {/* 정보 */}
      <div>
        {/* {rosters.map((roster) => (
          <Rosters_t1 key={roster.teamId} roster={roster} />
        ))} */}
      </div>
    </div>
  );
}

export default Rosters;
