import Head from "next/head";
import Image from "next/image";
import KunderaMain from "../public/KunderaMain.png";
import KunderaStore from "../public/KunderaStore.jpg";
import Profile from "../public/Profile.png";
import { GithubIcon } from "../assets/icons";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#dddddd" }}>
      <div className="container">
        <Head>
          <title>Wan Cho</title>
          <link rel="icon" href={process.env.BACKEND_URL + "favicon.ico"} />
        </Head>

        <main>
          <div className="section">
            <h2 className="title">Wan Cho</h2>
            <p className="description">
              bbogle7613@gmail.com
              <br />
              <a target="_blank" href="https://github.com/budlebee">
                Github
              </a>
            </p>
          </div>
          <div className="section">
            <h3 className="small-title">Education</h3>
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
            <h3 className="small-title">Works</h3>
            <div>문장공유 SNS 쿤데라</div>
            <Image
              src={KunderaStore}
              alt="Picture of the author"
              width={200}
              height={200}
            />
            <div className="grid">
              <a target="_blank" href="https://kundera.so" className="card">
                <h3>문장공유 SNS 쿤데라 &rarr;</h3>
                <p>
                  좋은 문장을 발견하고, 공유하는 서비스.
                  <br />
                  React, NodeJS, postgreSQL, AWS, SwiftUI
                </p>
              </a>

              <a
                target="_blank"
                href="https://videoglancer.com"
                className="card"
              >
                <h3>Videoglancer &rarr;</h3>
                <p>
                  유튜브 동영상을 자동으로 캡쳐해서 PDF로 변환해주는 SaaS.
                  <br />
                  Websocket API, AWS
                </p>
              </a>

              <a target="_blank" href="https://foresty.net" className="card">
                <h3>Foresty &rarr;</h3>
                <p>
                  트리 그래프 기반의 노트 테이킹 서비스. <br />
                  D3.js, React, Google firebase
                </p>
              </a>

              <a target="_blank" href="https://tect.dev" className="card">
                <h3>Tect.dev &rarr;</h3>
                <p>
                  전공별 커리큘럼 한눈에 보기
                  <br />
                  D3.js, NextJS, Google firebase
                </p>
              </a>
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
                Imaging Charge Density Wave Phase (2021.08)
              </div>
            </p>
          </div>
          <div className="section">
            <h3 className="small-title">Skill Set</h3>
            <p className="description">
              <div className="small-section">
                <br />
                HTML, CSS, JS, React, NodeJS, PostgreSQL, Swift, AWS(EC2, API
                Gateway, Lambda, SES, Route53, Cloudfront), Matlab
              </div>
              <div className="small-section">
                personal interest
                <br />
                Clojure, Python, Unity with C#
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
              <div className="small-section">2021 성적우수장학금</div>
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
          .container {
            background-color: #ffffff;
            color: #000000;
            min-height: 100vh;
            padding: 0 0.5rem;
            margin-left: 10vw;
            margin-right: 10vw;
            //display: flex;
            //flex-direction: column;
            //justify-content: center;
            //align-items: center;
          }
          .small-section {
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
          }

          main {
            padding: 5rem 0;
            //flex: 1;
            //display: flex;
            //flex-direction: column;
            //justify-content: center;
            //align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
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
            text-align: center;
          }

          .section {
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
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

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .container {
              margin-left: 0px;
              margin-right: 0px;
            }
            .grid {
              width: 100%;
              flex-direction: column;
            }
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
