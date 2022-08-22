import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FirebaseApp, Storage } from './firebase';
import { NanalilStyle } from './GlobalStyle';
import requireVisual from './img/visual/visualImg.png';
// import questionDiary from '../public/Videos/questiondiary.mp4';
import Navigation from './navigation';

const Container = styled.div`
`;

const VisualWrap = styled.div`
  width: 100%;
  margin-bottom: ${NanalilStyle.whiteSpace.ws_160};
`;

const VisualImg = styled.img.attrs(
  {
    src: `${requireVisual}`,
    alt: '나의 날씨 일기'
  }
)`
  width: 100%;
  height: auto;
`;

const Test = styled.div`
  height: 10000px;
`;

const Title = styled.h2`
  font-size: ${NanalilStyle.font.title};
  font-family: 'GmarketSansLight';
  line-height: 96px;
  color: ${NanalilStyle.color.gray.g_800};
  margin-bottom: ${NanalilStyle.whiteSpace.ws_40};

  strong {
    font-weight: bold;
    color: ${NanalilStyle.color.blue};
  };
`;

const SubTitle = styled.p`
  font-size: ${NanalilStyle.font.subTitle};
  line-height: ${NanalilStyle.font.lineHeight.subTitle};
`;

const ContentWrap=styled.div`
  max-width: 1520px;
  margin: 0 auto;
`;

const VideoWrap = styled.div`
  width: 457px;
  height: 965px;
  position: relative;
`;
const Video = styled.video`
  width: 428px;
  height: 926px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
`;
const VideoPhone = styled.img`
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  z-index:-1; 
`;



function App() {
  const visualRef = useRef();
  useEffect(()=> {
    console.log(visualRef.current);
  }, {});

  console.log(FirebaseApp);
  console.log(Storage);
  
  return (
    <Container>
      <Navigation />

      <VideoWrap>
        <VideoPhone src='https://firebasestorage.googleapis.com/v0/b/portfolio-nanalil.appspot.com/o/%E1%84%91%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png?alt=media&token=665320a1-456e-4fd2-b124-15c1a51aa6a7' />
        <Video muted loop autoPlay>
          <source autoPlay muted loop src='https://firebasestorage.googleapis.com/v0/b/portfolio-nanalil.appspot.com/o/%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%87%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC.mp4?alt=media&token=5d66bab9-f711-44ca-b161-d0ca25da1e9b' type='video/mp4'></source>
        </Video>
      </VideoWrap>

      <VisualWrap id='VisualRef' ref={visualRef}>
        <VisualImg />
      </VisualWrap>
      <ContentWrap>
        <Title>감정 날씨를 기록하는<br /><strong>나날일 앱 디자인</strong></Title>
        <SubTitle>나날일은 감정표현에 어려움을 겪는 현대인들을 위해,<br />날씨로 감정을 기록하는 ‘무드트레커형 다이어리 앱’ 입니다.</SubTitle>
      </ContentWrap>
      <Test />
      <Test id='TestLink' />
    </Container>
  );
}

export default App;
