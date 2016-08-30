import React from 'react';

import ColorConfig from '../../shared/color.config';
import ShapeConfig from '../../shared/shape.config';
import TextureConfig from '../../shared/texture.config';

import SelectListComponent from '../shared/select-list.component.jsx!';

var ControlPanelComponent = React.createClass({
  getInitialState: function() {
    return {
      colorOptions: [],
      shapeOptions: [],
      textureOptions: []
    };
  },

  componentDidMount: function() {
    this.setState({
      colorOptions: ColorConfig,
      shapeOptions: ShapeConfig,
      textureOptions: TextureConfig
    });
  },

  render: function () {
    return (
      <section id="diagram-control-panel" className="panel panel-heading">
        <div className="panel-heading">
          <h1 className="text-center">Control Panel</h1>
          <form>
            <SelectListComponent label="Shape" options={this.state.shapeOptions} />
            <SelectListComponent label="Color" options={this.state.colorOptions} />
            <SelectListComponent label="Texture" options={this.state.textureOptions} />
          </form>
        </div>
      </section>
    );
  }
});

export default ControlPanelComponent;
