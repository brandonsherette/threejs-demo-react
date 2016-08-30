import React from 'react';
import Util from '../shared/util';

var OptionPanelComponent = React.createClass({
  render: function() {
    var panelId = '#' + Util.generateId();
    var accordianId = this.props.accordianId ? '#' + this.props.accordianId : '';
    var rows = [];

    this.props.options.forEach((option) => {
      rows.push(<button type="button" className="btn btn-primary" data-id={option.id}>{option.name}</button>);
    });

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 class="panel-title">
            <a role="button" data-toggle="collapse" data-parent={accordianId} href={panelId}>
              {this.props.title}
            </a>
          </h4>
        </div>
        <div id={panelId} className="panel-collapse collapse" role="tabpanel">
          <div class="panel-body">
            {rows}
          </div>
        </div>
      </div>
    );
  }
});

export default OptionPanelComponent;
