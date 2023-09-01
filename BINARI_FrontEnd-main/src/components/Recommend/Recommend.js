import React from 'react';
import styled from 'styled-components';

const Recommend = () => {
  return <RecommendStyle>
    <br></br>
    <P1>나에게 맞는 병원을 찾을 수 있는</P1>
    <P2>병원 / 의사 추천</P2>
    <Button>전체보기 > </Button>

    <FlexContainer>
      <Container>
        <ScrapButton ><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
      <Container>
        <ScrapButton><img src="assets/image/Vector 11.png"></img></ScrapButton>
        <Area>용인</Area>
        <HospitalName>세브란스 병원</HospitalName>
        <Major>간담췌외과</Major>
        <Doctor>심은지 교수</Doctor>
      </Container>
  </FlexContainer>
  </RecommendStyle>;
};

export default Recommend;

const RecommendStyle = styled.div`
margin-top: 200px;
height: 750px;
background-color: #f8f8ff;
`;

const P1 = styled.p`
font-size: 18px;
line-height: 30px;
font-family: Arial, Helvetica, sans-serif;
margin-top: 70px;
margin-left: 363px;
`;

const P2 = styled.p`
margin-left: 361px;
margin-top: 4px;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
`;

const FlexContainer = styled.div`
display:flex;
flex-wrap:wrap;
align-content:center;
width:750px;
height:200px;   
margin-left: 940px;
margin-top: 150px;
`;

const Container = styled.div`
color:black;
background-color: white;
width: 160px;
height: 220px;
border-radius: 10px;
margin-top: 20px;
margin-left:20px;
`;

const Area = styled.p`
font-size: 13px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin: 5px 0px 0px 30px;
`;

const HospitalName = styled.p`
color: #6D85FF;
font-size: 15px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin: 5px 0px 0px 30px;
`;

const Major = styled.p`
font-size: 13px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin: 30px 0px 0px 30px;
`;

const Doctor = styled.p`
font-size: 16px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
margin: 5px 0px 0px 30px;
`;

const Button = styled.button`
width: 92px;
height: 31px;
border-radius: 15.5px;
background: #6D85FF;
border-color: #6D85FF;
color: #FFFFFF;
margin: 20px 0px 0px 1560px;
border: none;
outline:none;
`;

const ScrapButton = styled.button`
background-color: white;
border: none;
outline:none;
margin: 10px 0px 0px 120px;
`;