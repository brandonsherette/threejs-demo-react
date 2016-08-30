import React from 'react';
import DiagramService from './shared/diagram.service';

var SceneComponent = React.createClass({
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
      <div className="text-center">
        <h1>TODO: Add Scene Functionality</h1>
        <p>{this.state.texture}</p>
      </div>
    );
  }
});

export default SceneComponent;
