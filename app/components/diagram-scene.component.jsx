import React from 'react';
import DiagramService from '../shared/diagram.service';

var DiagramSceneComponent = React.createClass({
  getInitialState: function() {
    return {texture: null};
  },

  componentDidMount: function() {
    // rendering has been completed
    // perform any ajax requests here or model data fetching
    var model = DiagramService.get();

    this.setState({texture: model.texture.url});
  },

  render: function() {
    return (
      <div>
        <h1>TODO: Add Scene Functionality</h1>
        <p>{this.state.texture}</p>
      </div>
    );
  }
});

export default DiagramSceneComponent;
