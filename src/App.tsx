import React, { useEffect, useState } from 'react';
import './App.css';
import HorizontalScroll from 'react-scroll-horizontal'
import Draggable from 'react-draggable';

import roleMember1 from './img/role_member1_1.png'
import roleMember2 from './img/role_member2_1.png'
import rolePo1 from './img/role_po_1.png'
import roleSm1 from './img/role_sm_1.png'
import flagJunior from './img/flag_junior.png'
import flagSenior from './img/flag_senior.png'
import logoJira from './img/logo_jira.png'

import task11 from './img/task_1_1.png'
import task12 from './img/task_1_2.png'
import task13 from './img/task_1_3.png'
import task21 from './img/task_2_1.png'
import task22 from './img/task_2_2.png'
import task23 from './img/task_2_3.png'
import task31 from './img/task_3_1.png'
import task32 from './img/task_3_2.png'
import task33 from './img/task_3_3.png'
import taskRed from './img/task_red.png'
import taskYellow from './img/task_yellow.png'

function Page1() {
  return (
    <div className="page1">
      <div className="title">
        <p>Yi team</p>
      </div>
      <div className="flag">
        <img src={flagJunior} alt="" />
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="page2">
      <div className="title">
        <p>Introduction</p>
      </div>
      <div className="textBlock">
        <p>
          首先，簡單介紹一下這次路跑的主題Scrum吧！
          <br />
          Scrum 是敏捷式開發團隊設計的輕量級架構，是以短衝 (Sprint) 活動來運作，透過快速建置及迭代，以利大家共同合作，解決複雜的問題！</p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="page3">
      <div className="title">
        <p>Product Owner</p>
      </div>
      <div className="textBlock">
        <p>從今天開始我們就是一個路跑Team了<br></br>我是路跑負責人，我會負責評估本次路跑的待辦清單的價值與重要性，依序排列要執行的優先順序，對齊路跑目標。</p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={roleSm1} />
        <img src={rolePo1} />
      </div>
    </div>
  );
}

const Box1 = () => {
  return <div className="box">
    <div><img src={task11} alt="" width='640px'/></div>
  </div>
}
const Box2 = () => {
  return <div className="box">
    <div><img src={task12} alt="" width='640px'/></div>
  </div>
}
const Box3 = () => {
  return <div className="box">
    <div><img src={task13} alt="" width='640px'/></div>
  </div>
}

function Page4() {
  return (
    <div className="page4">
      <div className="title">
        <p>Product Backlog</p>
      </div>
      <div className="textBlock">
        <p>
        再來我會把需求放到路跑待辦清單
        <br />
        拖移需求來調整待辦的優先度順序
        </p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={roleSm1} />
        <img src={rolePo1} />
      </div>
      <div className="task">
        <Draggable>
          <div><Box2></Box2></div>
        </Draggable>
        <Draggable>
          <div><Box3></Box3></div>
        </Draggable>
        <Draggable>
          <div><Box1></Box1></div>
        </Draggable>
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div className="page5">
      <div className="title">
        <p>Planning</p>
      </div>
      <div className="textBlock">
        <p>
        確認每個待辦項目的價值與預期後，一起討論該如何調整各個待辦項目順序去完成短衝目標。
        <br />
        最後，團隊依照最終的優先順序並參考過往短衝完成工作量的紀錄，去預估本次短衝可以完成的待辦清單。
        </p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={roleSm1} />
        <img src={rolePo1} />
      </div>
    </div>
  );
}

function Page6() {
  return (
    <div className="page6">
      <div className="title">
        <p>Scrum Master</p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
      <div className="textBlock">
        <p>
          我的工作主要是促成路跑團隊成員協 作、引導團隊進行自省會議，提升團隊成員對 Scrum 路跑的瞭解。
          <br />
          對於如何討論行程、如何開會、如何列清單、如何協作都很懂，我會把相關的經驗帶給大家，維持路跑的步調，監督大家努力往前跑。
        </p>
      </div>
    </div>
  );
}

function Page7() {
  return (
    <div className="page7">
      <div className="title">
        <p>Story Point</p>
      </div>
      <div className="textBlock">
        <p>
          來估點數吧！
        </p>
      </div>
      <div className="textBlock2">
        <p>
          10點！
        </p>
      </div>
      <div className="textBlock3">
        <p>
          8點！
        </p>
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
      <div className="task">
        <img src={task21} alt="" width='640px'/>
        <img src={task22} alt="" width='640px'/>
        <img src={task23} alt="" width='640px'/>
      </div>
    </div>
  );
}

function Page8() {
  return (
    <div className="page8">
      <div className="title">
        <p>Assign Task</p>
      </div>
      <div className="textBlock">
        <p>
          各自選擇適合的任務吧
        </p>
      </div>
      <div className="textBlock2">
        <img src={taskYellow} width="40%" alt="" />
      </div>
      <div className="textBlock3">
        <img src={taskRed} width="40%" alt="" />
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
      <div className="task">
        <img src={task31} alt="" width='640px'/>
        <img src={task32} alt="" width='640px'/>
        <img src={task33} alt="" width='640px'/>
      </div>
    </div>
  );
}

function Page9() {
  return (
    <div className="page9">
      <div className="title">
        <p>Development</p>
      </div>
      <div className="textBlock">
        <p>
        路(ㄎㄞ) 跑(ㄈㄚ) ing...
        <br />
        利用好工具加快速度吧！ ！ 
        <br />
        <a href="https://www.atlassian.com/software/jira">Try Jira Now!</a>
        </p>
      </div>
      <img src={logoJira} alt="" />
    </div>
  );
}

function Page10() {
  return (
    <div className="page10">
      <div className="title">
        <p>Stand Up Meeting</p>
      </div>
      <div className="textBlock">
        <p>
        15 分鐘為限，短衝的每天會在同樣時間、同樣地點舉行。
        <br />
        藉由輪流分享、檢視各自的待辦事項，增加團隊溝通、點出障礙、調整計畫。
        </p>
      </div>
      <div className="role">
        <img src={rolePo1} />
        <img src={roleSm1} />
        <img src={roleMember1} />
        <img src={roleMember2} />
      </div>
    </div>
  );
}

function Page11() {
  return (
    <div className="page11">
      <div className="title">
        <p>2 week later</p>
      </div>
      <div className="textBlock">
        <p>
          
        </p>
      </div>
    </div>
  );
}
function Page12() {
  return (
    <div className="page12">
      <div className="title">
        <p>Review</p>
      </div>
      <div className="textBlock">
        <p>
        取得大家對Sprint的回饋意見，討論那接下來路跑的方向。
        <br />
        <br />
        來看看我們已經跑多遠了吧！
        <br />
        互相交流觀點怎樣可以跑得更遠，思考還要跑多久才會到。
        </p>
      </div>
      <div className="role">
        <img src={rolePo1} />
        <img src={roleSm1} />
        <img src={roleMember1} />
        <img src={roleMember2} />
      </div>
    </div>
  );
}
function Page13() {
  return (
    <div className="page13">
      <div className="title">
        <p>Retro</p>
      </div>
      <div className="textBlock">
        <p>
        精彩重播，團隊成員一起回顧路跑過程、經過了哪裡、 思考哪裡做得好 達到更有效率的目的，將會議記錄在 Confluence 中，為團隊帶來實質助益！
        </p>
      </div>
      <div className="role">
        <img src={rolePo1} />
        <img src={roleSm1} />
        <img src={roleMember1} />
        <img src={roleMember2} />
      </div>
    </div>
  );
}
function Page14() {
  return (
    <div className="page14">
      <div className="title">
        <p>2 week later</p>
      </div>
      <div className="textBlock">
        <p>
          
        </p>
      </div>
    </div>
  );
}
function Page15() {
  return (
    <div className="page15">
      <div className="title">
        <p>Arrive at Scrum Senior Village</p>
      </div>
      <div className="flag">
        <img src={flagSenior} alt="" />
      </div>
      <div className="role">
        <img src={roleMember1} />
        <img src={roleMember2} />
        <img src={rolePo1} />
        <img src={roleSm1} />
      </div>
    </div>
  );
}

function App() {
  
  const child   = { width: `100vw`, height: `100%`}
  const parent  = { width: `100%`, height: `100%`}

  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
      </style>
      <div className="container">
        <HorizontalScroll>
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
          <Page8/>
          <Page9/>
          <Page10/>
          <Page11/>
          <Page12/>
          <Page13/>
          <Page14/>
          <Page15/>
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default App;
