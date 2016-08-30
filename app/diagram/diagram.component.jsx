import React from 'react';
import ControlPanelComponent from './control-panel/control-panel.component.jsx!';
import SceneComponent from './scene.component.jsx!';

var DiagramComponent = React.createClass({
  render: function () {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-4"><ControlPanelComponent /></div>
          <div className="col-md-8"><SceneComponent /></div>
        </div>
      </section>
    );
  }
});

export default DiagramComponent;
