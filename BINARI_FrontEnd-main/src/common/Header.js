import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderStyle></HeaderStyle>;
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #ffffff;
  box-shadow: 0px 4px 30px -3px rgba(52, 52, 52, 0.1);
`;
