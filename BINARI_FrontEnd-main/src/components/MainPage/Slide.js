import React, { useState } from 'react';
import styled from 'styled-components';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonColors, setButtonColors] = useState(['#D3D3D3', '#D3D3D3', '#D3D3D3']);

  const images = ['assets/image/report.png', 'assets/image/sky1.jpg', 'assets/image/sky2.jpeg'];

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetButtonColors();
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    resetButtonColors();
  };

  const resetButtonColors = () => {
    setButtonColors(['#D3D3D3', '#D3D3D3', '#D3D3D3']);
  };

  const colorChange = (index) => {
    const newColors = buttonColors.map((color, i) => (i === index ? '#6D85FF' : '#D3D3D3'));
    setButtonColors(newColors);
  };

  return (
    <SlideStyle>
      <P1>서울대병원 머시기 의사가 추천하는 건강 식단</P1>
      <P2>당뇨 환자를 위한 올바른 식습관은?</P2>
      <DetailButton>자세히 보기</DetailButton>
      <OverflowContainer className="overflow">
        <Container style={{ transform: `translateX(-${currentIndex * 94}vw)` }}>
          {images.map((image, index) => (
            <Inner key={index}>
              <InnerImage src={image} alt={`Slide ${index + 1}`} />
            </Inner>
          ))}
        </Container>
      </OverflowContainer>
      <ArrowButton onClick={handleNextSlide}>
            <img src="assets/image/Union.png" alt="Arrow" />
          </ArrowButton>
      <SlideButton>
        <Button
          onClick={() => {
            setCurrentIndex(0);
            colorChange(0);
          }}
          style={{ background: buttonColors[0] }}
        />
        <Button
          onClick={() => {
            setCurrentIndex(1);
            colorChange(1);
          }}
          style={{ background: buttonColors[1] }}
        />
        <Button
          onClick={() => {
            setCurrentIndex(2);
            colorChange(2);
          }}
          style={{ background: buttonColors[2] }}
        />
      </SlideButton>

    </SlideStyle>
  );
};

export default Slide;

const SlideStyle = styled.div`
  margin-top: 80px;
  height: 600px;
`;

const P1 = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 229px;
  margin-left: 363px;
`;

const P2 = styled.p`
  width: 273px;
  height: 110px;
  top: 264px;
  margin-left: 363px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
`;

const DetailButton = styled.button`
  width: 195px;
  height: 54px;
  margin-top: 100px;
  margin-left: 369px;
  padding: 12px 40px 12px 40px;
  border-radius: 27px;
  gap: 10px;
  background: #6D85FF;
  border-color: #6D85FF;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
`;

const ArrowButton = styled.button`
  position: relative;
  width: 45px;
  height: 45px;
  top: -190px;
  margin-left: 1551px;
  background-color: #9AAAFF;
  border-color: #9AAAFF;
  border-radius: 50%;
`;

const ReportContainer = styled.div`
  position: relative;
  width: 680px;
  height: 380px;
  top: -405px;
  margin-left: 812px;
`;

const Container = styled.div`
  width: 300vw;
  // transition: transform 0.5s; 이거 적용할지 말지
  margin-left: 892px;
`;

const Inner = styled.div`
  width: 34vw;
  float: left;
  margin-right: 1100px;
`;

const InnerImage = styled.img`
  width: 100%;
  height: 380px;
`;

const OverflowContainer = styled.div`
  overflow: hidden;
`;

const Button = styled.div`
background: #D3D3D3;
width: 10px;
height: 10px;
border-radius: 27px;
margin-left: 10px;
`;

const SlideButton = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin-left: 470px;
`;