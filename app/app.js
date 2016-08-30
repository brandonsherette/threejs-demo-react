import AppComponent from './app.component.jsx!';
import ReactDom from 'react-dom';
import React from 'react';

$(document).ready(() => {
  ReactDom.render(
    React.createElement(AppComponent),
    document.getElementById('app')
  );
});
