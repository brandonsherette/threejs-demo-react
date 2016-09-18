import React from 'react';
import PubSub from 'pubsub-js';

import {ColorConfig, ShapeConfig, TextureConfig, DiagramService} from 'app/shared/index';

import OptionPanelComponent from './option-panel.component';

var ControlPanelComponent = React.createClass({
  pubsubToken: null,

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

    // add listeners
    this.pubsubToken = PubSub.subscribe('model.diagram:change', () => {
      this.setState({
        model: DiagramService.get()
      });
    });
  },

  componentWillUnmount() {
    if(this.pubsubToken) {
      PubSub.unsubscribe(this.pubsubToken);
    }
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
            <OptionPanelComponent title="Shape"    optionType="shape"    accordianId={panelGroupId} options={this.state.shapeOptions}   selectedOption={shapeOption} />
            <OptionPanelComponent title="Color"    optionType="color"    accordianId={panelGroupId} options={this.state.colorOptions}   selectedOption={colorOption} />
            <OptionPanelComponent title="Texture"  optionType="texture"  accordianId={panelGroupId} options={this.state.textureOptions} selectedOption={textureOption} />
          </div>
        </div>
      </section>
    );
  }
});

export default ControlPanelComponent;
