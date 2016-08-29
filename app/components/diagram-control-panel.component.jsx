import React from 'react';

var DiagramControlPanelComponent = React.createClass({
  render: function () {
    return (
      <section id="diagram-control-panel" className="panel panel-heading">
        <div className="panel-heading">
          <h1 className="text-center">Control Panel</h1>
          <form>
            <div className="form-group">
              <label>Shape</label>
              <select className="select-shape form-control" id="select-shape"></select>
            </div>
            <div className="form-group">
              <label>Texture</label>
              <select className="select-texture form-control" id="select-texture"></select>
            </div>
            <div className="form-group">
              <label>Color</label>
              <select className="select-color form-control" id="select-color"></select>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary" id="select-product">Select</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
});

export default DiagramControlPanelComponent;
