import React from 'react';
import DiagramComponent from './diagram/diagram.component.js';

var AppComponent = React.createClass({
  render: function() {
    return (
      <div>
        <DiagramComponent />
      </div>
    );
  }
});

export default AppComponent;
