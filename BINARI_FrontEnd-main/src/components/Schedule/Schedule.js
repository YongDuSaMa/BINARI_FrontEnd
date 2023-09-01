import React from 'react';
import styled from 'styled-components';

const Schedule = () => {
  return <ScheduleStyle>
    <P1>나를 기록하는</P1>
    <P2>투병 일지</P2>
    <Button>전체보기 > </Button>
    <FlexContainer>
      <PostButton>+ 새로운 일지 쓰기</PostButton>
      <Container>
      </Container>
      <Container>
      </Container>
      <Container>
      </Container>
      <Container>
      </Container>
      <Container>
      </Container>
    </FlexContainer>
  </ScheduleStyle>;
};

export default Schedule;

const ScheduleStyle = styled.div`
margin-top: 40px;
height: 500px;
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

const Button = styled.button`
width: 92px;
height: 31px;
border-radius: 15.5px;
background: #6D85FF;
border: none;
outline:none;
font-size: 14px;
font-weight: 700;
line-height: 30px;
text-align: center;
color: #FFFFFF;
margin-left: 1500px;
`;

const PostButton = styled.button`
width: 174px;
height: 230px;
border-radius: 20px;
background: linear-gradient(180deg, #6D85FF 0%, #9ACFFF 92.58%);
font-size: 20px;
font-weight: 800;
line-height: 30px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
border: none;
outline: none;
margin-top: 50px;
margin-left: 350px;
`;

const FlexContainer = styled.div`
`;

const Container = styled.div`
`;
