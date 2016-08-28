import React from 'react';
import DiagramControlPanelComponent from './diagram-control-panel.component.jsx!';
import DiagramSceneComponent from './diagram-scene.component.js';

var DiagramComponent = React.createClass({
  render: function() {
    <section class="container diagram-component">
      <div class="row">
        <div class="col-mid-4"><DiagramControlPanelComponent /></div>
        <div class="col-mid-8"><DiagramSceneComponent /></div>
      </div>
    </section>
  }
});

export default DiagramComponent;
