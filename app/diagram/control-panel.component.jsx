import React from 'react';

import ColorConfig from './shared/color.config';
import ShapeConfig from './shared/shape.config';
import TextureConfig from './shared/texture.config';
import DiagramService from './shared/diagram.service';

import OptionPanelComponent from './option-panel.component.jsx!';

var ControlPanelComponent = React.createClass({
  getInitialState: function() {
    return {
      colorOptions: [],
      shapeOptions: [],
      textureOptions: [],
      model: null
    };
  },

  componentDidMount: function() {
    this.setState({
      colorOptions: ColorConfig,
      shapeOptions: ShapeConfig,
      textureOptions: TextureConfig,
      model: DiagramService.get()
    });
  },

  render: function() {
    var panelGroupId = 'control-panel';
    var model = this.state.model;
    var shapeOption = model ? model.shape.slug : null;
    var colorOption = model ? model.color.slug : null;
    var textureOption = model ? model.texture.slug : null;


    return (
      <section id="diagram-control-panel" className="panel panel-heading">
        <div className="panel-heading">
          <h1 className="text-center">Control Panel</h1>
          <div className="panel-group" id={panelGroupId} role="tablist" aria-multiselectable="true">
            <OptionPanelComponent title="Shape"    accordianId={panelGroupId} options={this.state.shapeOptions}   selectedOption={shapeOption} />
            <OptionPanelComponent title="Color"    accordianId={panelGroupId} options={this.state.colorOptions}   selectedOption={colorOption} />
            <OptionPanelComponent title="Texture"  accordianId={panelGroupId} options={this.state.textureOptions} selectedOption={textureOption} />
          </div>
        </div>
      </section>
    );
  }
});

export default ControlPanelComponent;
