import React from 'react';
import Slide from './Slide';
import Recommend from '../Recommend/Recommend';
import Board from '../Board/Board';
import Schedule from '../Schedule/Schedule';

const MainPage = () => {
  
  return (
    <div>
      <Slide />
      <Recommend />
      <Board />
      <Schedule />
    </div>
  );
};

export default MainPage;
