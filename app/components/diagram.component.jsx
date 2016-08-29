import React from 'react';
import DiagramControlPanelComponent from './diagram-control-panel.component.jsx!';
import DiagramSceneComponent from './diagram-scene.component.jsx!';

var DiagramComponent = React.createClass({
  render: function () {
    return (
      <section className="container diagram-component">
        <div className="row">
          <div className="col-md-4"><DiagramControlPanelComponent /></div>
          <div className="col-md-8"><DiagramSceneComponent /></div>
        </div>
      </section>
    );
  }
});

export default DiagramComponent;
