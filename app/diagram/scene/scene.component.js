import React from 'react';
import DiagramScene from './diagram.scene';
import PubSub from 'pubsub-js';

var SceneComponent = React.createClass({
  pubsubToken: null,

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

    // add listener
    this.pubsubToken = PubSub.subscribe('model.diagram:change', (data) => {
      // have the scene update its model
      DiagramScene.loadModel();
      DiagramScene.updateDiagram();
    });
  },

  componentWillUnmount: function() {
    if(this.pubsubToken) {
      PubSub.unsubscribe(this.pubsubToken);
    }
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
