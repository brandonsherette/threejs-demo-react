import React from 'react';
import Util from '../shared/util';

var OptionPanelComponent = React.createClass({
  render: function() {
    var panelNam
    var panelId = 'collapse' + Util.generateId();
    var accordianId = this.props.accordianId ? '#' + this.props.accordianId : '';
    var rows = [];

    this.props.options.forEach((option) => {
      let btnClassNames = 'btn btn-default list-group-item';

      console.info('props slug: ' + this.props.selectedOption);
      console.info('option: ' + option.slug);
      if (this.props.selectedOption && this.props.selectedOption === option.slug) {
        btnClassNames += ' active';
      }

      rows.push(<button key={option.id} type="button" className={btnClassNames} data-id={option.id}>{option.name}</button>);
    });

    //////////////

    return (
      <div className="panel panel-primary panel-default">
        <div className="panel-heading" role="tab" id="headingOne">
          <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent={accordianId} href={'#' + panelId} aria-expanded="false" aria-controls={panelId}>
              {this.props.title}
            </a>
          </h4>
        </div>
        <div id={panelId} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
          <div className="panel-body">
            <div className="list-group">
              {rows}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default OptionPanelComponent;
