import React from 'react';
import DiagramScene from './diagram.scene';

var SceneComponent = React.createClass({
  getInitialState: function() {
    return {
      sceneCanvas: null
    };
  },

  componentDidMount: function() {
    // rendering has been completed
    var element = document.getElementById('view-port');
    console.info(element.offsetWidth);

    // initialize diagram scene
    DiagramScene.init({
      element: element,
      width: element.offsetWidth
    });
  },

  render: function() {
    return (
      <section>
        <div id="view-port"></div>
      </section>
    );
  }
});

export default SceneComponent;
