import AppComponent from './components/app.component.jsx!';
import ReactDom from 'react-dom';
import React from 'react';

ReactDom.render(
  React.createElement(AppComponent),
  document.getElementById('app')
);
