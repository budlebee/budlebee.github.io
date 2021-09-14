import Head from "next/head";
//import Image from "next/image";
import KunderaMain from "../public/KunderaMain.png";
import KunderaStore from "../public/KunderaStore.jpg";
import Profile from "../public/Profile.png";
import { GithubIcon, EmailIcon } from "../assets/icons";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#dddddd" }}>
      <div className="container">
        <Head>
          <title>Wan Cho</title>
          <link rel="icon" href={process.env.BACKEND_URL + "favicon.ico"} />
        </Head>

        <main>
          <div
            className="section profile"
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <img
                src="/Profile.png"
                alt="Picture of the author"
                width={200}
                height={200}
                style={{ borderRadius: "39% 61% 25% 75% / 36% 56% 44% 64%" }}
              />
            </div>
            <div style={{ margin: "1rem" }}>
              <h2 className="title">Wan Cho</h2>
              <p className="description">
                <EmailIcon width="20" height="20" />
                bbogle7613@gmail.com
                <br />
                <a target="_blank" href="https://github.com/budlebee">
                  <GithubIcon width="20" height="20" />
                  Github
                </a>
              </p>
            </div>
          </div>
          <div className="section">
            <div className="title">Education</div>
            <p className="description">
              <div className="small-section">
                연세대학교 물리학과 (2015.03-2022.02 졸업예정자)
              </div>
              <div className="small-section">
                GPA Total: 4.05 / 4.5, Major: 4.12 / 4.5
              </div>
            </p>
          </div>
          <div className="section">
            <div className="title">Works</div>

            <div className="small-section">
              <details open>
                <summary>
                  <span>문장공유 SNS 쿤데라</span>
                  <span style={{ margin: "1rem" }}>
                    <a
                      target="_blank"
                      href="https://kundera.so"
                      style={{ color: "#000" }}
                    >
                      <button className="retro-button-violet">
                        사용해보기
                      </button>
                    </a>
                  </span>
                </summary>
                <p>
                  <img
                    src="/KunderaStore.jpg"
                    alt="Picture of the Kundera App store"
                    width="100%"
                  />
                  <p>틱톡처럼 무작위 문장이 뜨는 SNS</p>
                  <p>- 웹버전과 아이폰 앱을 풀스택으로 개발</p>
                  <p>- stack: react, nodejs, postgresql, swift</p>
                  <p>- 사용자 선호에 따라 뜨는 문장이 바뀌는 추천 시스템</p>
                  <p>
                    - 웹 프론트는 aws cloudfront 로 배포. 백엔드는 aws ec2와 api
                    gateway 를 이용해 api 서버를 구축
                  </p>
                </p>
              </details>
            </div>

            <div className="small-section">
              <details open>
                <summary>
                  <span>노트테이킹 서비스 Foresty</span>
                  <span style={{ margin: "1rem" }}>
                    <a
                      target="_blank"
                      href="https://foresty.net"
                      style={{ color: "#000" }}
                    >
                      <button className="retro-button-green">사용해보기</button>
                    </a>
                  </span>
                </summary>
                <p>
                  <video
                    src="https://foresty-tutorial.s3.ap-northeast-2.amazonaws.com/home-vidoe.mp4"
                    autoPlay="true"
                    playsInline="true"
                    muted
                    loop="true"
                    width="100%"
                  ></video>
                  <p>트리 그래프 형식의 노트테이킹 서비스</p>
                  <p>- stack: d3js, react, google firebase</p>
                  <p>- 클릭앤 드래그로 노드 연결 기능</p>
                  <p>- 멀티윈도우 기능</p>
                </p>
              </details>
            </div>

            <div className="small-section">
              <details open>
                <summary>
                  <span>유튜브 캡쳐 SaaS Videoglancer</span>
                  <span style={{ margin: "1rem" }}>
                    <a
                      target="_blank"
                      href="https://videoglancer.com"
                      style={{ color: "#000" }}
                    >
                      <button className="retro-button-yellow">
                        사용해보기
                      </button>
                    </a>
                  </span>
                </summary>
                <p>
                  <img
                    src="https://videoglancer.com/static/media/sample.d33125ae.png"
                    width="100%"
                  ></img>
                  <p>
                    유튜브 영상 url 을 입력하면 영상을 1분단위로 캡쳐해서 pdf 로
                    만들어 주는 서비스.
                  </p>
                  <p>
                    - stack: websocket API, 브라우저 자동화 도구 puppeteer, aws
                    lambda, api gateway
                  </p>
                </p>
              </details>
            </div>

            <div className="small-section">
              <details open>
                <summary>
                  <span>크롬/웨일 익스텐션 Go연세/Go려대</span>
                  <span style={{ margin: "1rem" }}>
                    <a
                      target="_blank"
                      href="https://store.whale.naver.com/detail/flaejhfppahhbmndffooogikeaphbfmd"
                      style={{ color: "#000" }}
                    >
                      <button className="retro-button-blue">사용해보기</button>
                    </a>
                  </span>
                </summary>
                <p>
                  <img src="/goyonsei.png" width="100%"></img>
                  <img src="/goryu.png" width="100%"></img>
                  <p>연세대 / 고려대 생이 자주 가는 링크 모음</p>
                  <p>
                    -{" "}
                    <a
                      target="_blank"
                      href="https://github.com/seohyun0120/Quick-Sook"
                    >
                      퀵숙
                    </a>
                    을 포크해서 제작.
                  </p>
                  <p>
                    - 다크모드 기능을 추가해서 PR을 날린뒤, 저희 학교용으로
                    제작해도 되냐고 허락을 받아서 제작하게 됨.
                  </p>
                  <p>
                    - 고려대 익스텐션도 연대생이 만들어 버리면 재밌겠다 싶어서
                    만들어버림.
                  </p>
                </p>
              </details>
            </div>
          </div>
          <div className="section">
            <h3 className="small-title">Experience</h3>
            <p className="description">
              <div className="small-section">
                연세대 응용광학연구실 - Signal Filter Simulation
                (2016.07-2016.08)
                <br />
                <a
                  target="_blank"
                  href="https://github.com/budlebee/signal-filter-simulation"
                >
                  Github
                </a>
              </div>
              <div className="small-section">
                연세대 전자구조계산 연구실 - 2D Ising model using monte carlo
                moving (2019.12-2020.01)
                <br />
                <a target="_blank" href="https://github.com/budlebee/2d-ising">
                  Github
                </a>
              </div>
              <div className="small-section">
                연세대 양자이미지 연구실 - Charge Density Wave Phase Analysis
                (2021.08-)
              </div>
            </p>
          </div>
          <div className="section">
            <h3 className="small-title">Skill Set</h3>
            <p className="description">
              <div className="small-section">
                HTML, CSS, JS, React, NodeJS, PostgreSQL, Swift, AWS(EC2, API
                Gateway, Lambda, SES, Route53, Cloudfront), Matlab, Clojure,
                Python, Unity
              </div>
            </p>
          </div>
          <div className="section">
            <h3 className="small-title">Awards</h3>
            <p className="description">
              <div className="small-section">
                2020 창업진흥원 주관 청청콘 장려상 (샬롯의 책가방, 상금
                5000만원)
              </div>
              <div className="small-section">
                2020 엑셀러레이터 와이앤아처 스타트업 익스퍼트 1기 (샬롯의
                책가방)
              </div>
              <div className="small-section">
                2020, 2021 연세대 고등교육원 워크스테이션 선정 (상금 350만원)
              </div>
              <div className="small-section">
                2021 학과 수석 및 성적우수장학금
              </div>
              <div className="small-section">
                2020 연세대 스타트업 이글스 선정 (지원금액 300만원)
              </div>
              <div className="small-section">
                2017 동두천 락페스티벌 본선 진출 (윈터폴)
              </div>
            </p>
          </div>
          <div className="section">
            <h3 className="small-title">Others</h3>
            <p className="description">
              <div className="small-section">
                보유 특허 - 화면 캡쳐 행위에 대응하기 위한 방법 및 애플리케이션
                (제 1-2290130 호)
              </div>
              <div className="small-section">
                연세대 멋쟁이 사자처럼 8기 (2020)
              </div>
              <div className="small-section">
                연세대 상경경영대 동아리 헤드락 부회장 (2019.02-2019.08)
              </div>
              <div className="small-section">
                락밴드 윈터폴 작사, 작곡, 리더 (2016.12-2018.08)
                <br />
                <a
                  target="_blank"
                  href="https://www.melon.com/album/detail.htm?albumId=10226873"
                >
                  Melon에서 듣기
                </a>
              </div>
              <div className="small-section">
                <a target="_blank" href="https://budlebee.wordpress.com">
                  개인 블로그
                </a>
              </div>
            </p>
          </div>
        </main>

        <style jsx>{`
          summary {
            cursor: pointer;
            font-weight: 700;
            font-style: italic;
          }
          .container {
            background-color: #ffffff;
            color: #000000;
            min-height: 100vh;
            padding: 0 0.5rem;
            margin-left: 10vw;
            margin-right: 10vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16px;
          }
          .title {
            font-size: 32px;
            font-weight: 700;
          }
          .small-section {
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 16px;
          }

          main {
            padding: 5rem 5rem;
            //flex: 1;
            //display: flex;
            //flex-direction: column;
            //justify-content: center;
            //align-items: center;
          }
          @media (max-width: 600px) {
            main {
              padding: 5rem 2rem;
            }
          }

          a {
            color: #0070f3;
            text-decoration: none;
          }

          .small-title {
            margin: 0;
            margin-top: 1rem;
            line-height: 1.15;
            font-size: 2rem;
          }

          .title,
          .section,
          .description {
            //text-align: center;
          }

          .section {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .description {
            line-height: 1.2;
            //font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            //margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          a:hover,
          a:focus,
          a:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          button {
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
          }

          @media (max-width: 600px) {
            .profile {
              width: 100%;
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }
            .container {
              margin-left: 0px;
              margin-right: 0px;
            }
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
          .retro-button-green {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border: 1px solid #000;
            color: #000;
            background: transparent;
            z-index: 1;
          }
          .retro-button-green:hover:after {
            top: 0;
            left: 0;
          }
          .retro-button-green:after {
            content: "";
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 5px;
            left: 5px;
            transition: 0.2s;
            opacity: 0.7;
            background-color: #80ed99;
          }

          .retro-button-violet {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border: 1px solid #000;
            color: #000;
            background: transparent;
            z-index: 1;
          }
          .retro-button-violet:hover:after {
            top: 0;
            left: 0;
          }
          .retro-button-violet:after {
            content: "";
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 5px;
            left: 5px;
            transition: 0.2s;
            opacity: 0.7;
            background-color: #9998ff;
          }
          .retro-button-violet:disabled {
            cursor: default;
          }
          .retro-button-violet:disabled:after {
            background-color: #999;
            cursor: default;
          }

          .retro-button-red {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border: 1px solid #000;
            color: #000;
            background: transparent;
            z-index: 1;
          }
          .retro-button-red:hover:after {
            top: 0;
            left: 0;
          }
          .retro-button-red:after {
            content: "";
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 5px;
            left: 5px;
            transition: 0.2s;
            opacity: 0.7;
            background-color: #ff5555;
          }
          .retro-button-red:disabled {
            cursor: default;
          }
          .retro-button-red:disabled:after {
            background-color: #999;
            cursor: default;
          }

          .retro-button-blue {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border: 1px solid #000;
            color: #000;
            background: transparent;
            z-index: 1;
          }
          .retro-button-blue:hover:after {
            top: 0;
            left: 0;
          }
          .retro-button-blue:after {
            content: "";
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 5px;
            left: 5px;
            transition: 0.2s;
            opacity: 0.7;
            background-color: #3a86ff;
          }
          .retro-button-blue:disabled {
            cursor: default;
          }
          .retro-button-blue:disabled:after {
            background-color: #999;
            cursor: default;
          }

          .retro-button-yellow {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border: 1px solid #000;
            color: #000;
            background: transparent;
            z-index: 1;
          }
          .retro-button-yellow:hover:after {
            top: 0;
            left: 0;
          }
          .retro-button-yellow:after {
            content: "";
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 5px;
            left: 5px;
            transition: 0.2s;
            opacity: 0.7;
            background-color: #ffe566;
          }
          .retro-button-yellow:disabled {
            cursor: default;
          }
          .retro-button-yellow:disabled:after {
            background-color: #999;
            cursor: default;
          }

          .css-button-neumorphic {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border-radius: 5px;
            border: none;
            background: #efefef;
            box-shadow: 2px 2px 4px #c8d0e7, -1px -1px 3px #fff;
            color: #585858;
          }
          .css-button-neumorphic:active {
            box-shadow: inset 1px 1px 3px #c8d0e7, inset -1px -1px 3px #fff;
          }

          .css-button-gradient--6 {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border-radius: 5px;
            border: none;
            background-size: 120% auto;
            background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 75%);
          }
          .css-button-gradient--6:hover {
            background-position: right center;
          }
          .css-button-gradient--6:active {
            top: 2px;
          }

          .css-button-sliding-to-left--sky {
            min-width: 130px;
            height: 40px;
            color: #fff;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border-radius: 5px;
            z-index: 0;
            background: #fff;
            overflow: hidden;
            border: 2px solid #4433ff;
            color: #4433ff;
          }
          .css-button-sliding-to-left--sky:hover {
            color: #fff;
          }
          .css-button-sliding-to-left--sky:hover:after {
            width: 100%;
          }
          .css-button-sliding-to-left--sky:after {
            content: "";
            position: absolute;
            z-index: -1;
            transition: all 0.3s ease;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            background: #4433ff;
          }

          .button {
            display: inline-block;
            text-decoration: none;
            position: relative;
            margin-top: 40px;
          }

          .button .bottom {
            position: absolute;
            left: 7px;
            top: 7px;
            width: 100%;
            height: 100%;
            background-color: #80ed99;
            display: block;
            -webkit-transition: all 0.15s ease-out;
            -moz-transition: all 0.15s ease-out;
            -o-transition: all 0.15s ease-out;
            transition: all 0.15s ease-out;
          }

          .button .top {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 12px 17px 12px 17px;
            border: 2px solid #80ed99;
          }

          .button-dark .top {
            border: 2px solid #fff;
          }

          .button .top .label {
            font-weight: 600;
            color: #04049d;
            /*font-size: 12px;*/
            line-height: 110%;
            letter-spacing: 2px;
            text-align: center;
            text-transform: uppercase;
            -webkit-transition: all 0.15s ease-out;
            -moz-transition: all 0.15s ease-out;
            -o-transition: all 0.15s ease-out;
            transition: all 0.15s ease-out;
          }

          .button-dark .top .label {
            color: #fff;
          }

          .button:hover .bottom {
            left: 0;
            top: 0;
            background-color: #f3f3f3;
          }

          .button:hover .top .label {
            color: #80ed99;
          }

          .button-border {
            position: absolute;
            background-color: #80ed99;
            -webkit-transition: all 0.25s ease-out;
            -moz-transition: all 0.25s ease-out;
            -o-transition: all 0.25s ease-out;
            transition: all 0.25s ease-out;
          }

          .button:hover .top .button-border-left,
          .button:hover .top .button-border-right {
            height: calc(100% + 2px);
          }

          .button:hover .top .button-border-top,
          .button:hover .top .button-border-bottom {
            width: calc(100% + 2px);
          }

          .button-border-left {
            left: -2px;
            bottom: -2px;
            width: 2px;
            height: 0;
          }

          .button-border-top {
            left: -2px;
            top: -2px;
            width: 0;
            height: 2px;
          }

          .button-border-right {
            right: -2px;
            top: -2px;
            width: 2px;
            height: 0;
          }

          .button-border-bottom {
            right: -2px;
            bottom: -2px;
            width: 0;
            height: 2px;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
}
