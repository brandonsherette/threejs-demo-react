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
    var panelGroupId = 'control-panel'

    return (
      <section id="diagram-control-panel" className="panel panel-heading">
        <div className="panel-heading">
          <h1 className="text-center">Control Panel</h1>
          <div className="panel-group" id={panelGroupId} role="tablist">
            <SelectListComponent title="Shape"    accordianId={panelGroupId} options={this.state.shapeOptions} />
            <SelectListComponent title="Color"    accordianId={panelGroupId} options={this.state.colorOptions} />
            <SelectListComponent title="Texture"  accordianId={panelGroupId} options={this.state.textureOptions} />
          </div>
        </div>
      </section>
    );
  }
});

export default ControlPanelComponent;
