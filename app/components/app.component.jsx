import React from 'react';
import HeaderComponent from './header.component.jsx!';
import DiagramComponent from './diagram.component.jsx!';

var AppComponent = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <HeaderComponent />
        <DiagramComponent />
      </div>
    );
  }
});

export default AppComponent;
