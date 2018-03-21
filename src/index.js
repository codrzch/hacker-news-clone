import React from 'react';
import ReactDOM from 'react-dom';
import {stories} from './static-data';
import StoryList from './StoryList';
import './index.css';

ReactDOM.render(
  <StoryList stories={stories} />,
  document.querySelector('#root')
);
