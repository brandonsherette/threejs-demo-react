import React from 'react';

var DiagramControlPanelComponent = React.createClass({
  render: function () {
    <section id="diagram-control-panel" class="panel panel-heading">
      <div class="panel-heading">
        <h1 class="text-center">Control Panel</h1>
        <form>
          <div class="form-group">
            <label for="select-shape">Shape</label>
            <select class="select-shape form-control" id="select-shape"></select>
          </div>
          <div class="form-group">
            <label for="select-texture">Texture</label>
            <select class="select-texture form-control" id="select-texture"></select>
          </div>
          <div class="form-group">
            <label for="select-color">Color</label>
            <select class="select-color form-control" id="select-color"></select>
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-primary" id="select-product">Select</button>
          </div>
        </form>
      </div>
    </section>
  }
});

export default DiagramControlPanelComponent;
