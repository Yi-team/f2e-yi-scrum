import React, { useEffect, useState } from 'react';
import './App.css';
import HorizontalScroll from 'react-scroll-horizontal'

import roleMember1 from './img/role_member1_1.png'
import roleMember2 from './img/role_member2_1.png'
import rolePo1 from './img/role_po_1.png'
import roleSm1 from './img/role_sm_1.png'
import flagJunior from './img/flag_junior.png'

function Page1() {
  return (
    <div className="page1">
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
      <div className="textBlock">
        <p>首先，簡單介紹一下這次路跑的主題Scrum吧! Scrum 是敏捷式開發團隊設計的輕量級架構，是以短衝(Sprint)活動來運作，透過快速建置及迭代，以利大家共同合作，解決複雜的問題！</p>
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
      <div className="textBlock">
        <p>首先，簡單介紹一下這次路跑的主題Scrum吧! Scrum 是敏捷式開發團隊設計的輕量級架構，是以短衝(Sprint)活動來運作，透過快速建置及迭代，以利大家共同合作，解決複雜的問題！</p>
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

function Page4() {
  return (
    <div className="page4">
    </div>
  );
}

function Page5() {
  return (
    <div className="page5">
    </div>
  );
}

function Page6() {
  return (
    <div className="page6">
    </div>
  );
}

function Page7() {
  return (
    <div className="page7">
    </div>
  );
}

function App() {
  
  const child   = { width: `100vw`, height: `100%`}
  const parent  = { width: `100%`, height: `100%`}

  return (
    <div className="App">
      <div className="container">
        <HorizontalScroll>
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default App;
