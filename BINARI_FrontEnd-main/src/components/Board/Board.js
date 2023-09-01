import React from 'react';
import styled from 'styled-components';

const Board = () => {
  return <BoardStyle>
    <P1>원하는 정보를 얻고, 궁금한 것을 질문하는</P1>
    <P2>정보 / 질문 게시판</P2>
    <FlexContainer>
      <Container1>
        정보 게시판 >  
      </Container1>
      <Container1>
        질문 게시판 >
      </Container1>
      <Container2></Container2>
      <Container2></Container2>
    </FlexContainer>
    
  </BoardStyle>;
};

export default Board;

const BoardStyle = styled.div`
margin-top: 100px;
height: 650px;
`;

const P1 = styled.p`
font-size: 18px;
line-height: 30px;
font-family: Arial, Helvetica, sans-serif;
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
flex-wrap: wrap;
align-content:center;
width:1450px;
height:200px;
margin-left: 20%;
margin-top: 150px;   
`;

const Container1 = styled.div`
width: 582px;
height: 46px;
border-radius: 12px;
margin-top: 20px;
background: #6D85FF;
color: white;
font-size: 18px;
font-weight: 800;
line-height: 45px;
letter-spacing: 0em;
text-align: right;
`;

const Container2 = styled.div`
width: 582px;
height: 304px;
border-radius: 16px;
background: #FFFFFF;
box-shadow: 0px 4px 12px 0px #D9D9D961;
`;
