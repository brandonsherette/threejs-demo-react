import React from 'react';
import ControlPanelComponent from './control-panel.component';
import SceneComponent from './scene/scene.component';

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
