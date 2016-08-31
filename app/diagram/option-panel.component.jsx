import React from 'react';
import Util from '../shared/util';
import DiagramService from './shared/diagram.service';

var OptionPanelComponent = React.createClass({
  componentDidMount: function() {
    // add dom event listeners

  },

  componentWillUnmount: function() {
    // remove dom event listeners

  },

  onOptionClick: function(optionId) {
    // need to dispatch event that option has been selected
    DiagramService.updateOption(this.props.optionType, optionId);
  },

  render: function() {
    var headingId = 'heading' + Util.generateId();
    var panelId = 'collapse' + Util.generateId();
    var accordianId = this.props.accordianId ? '#' + this.props.accordianId : '';
    var rows = [];

    this.props.options.forEach((option) => {
      let btnClassNames = 'btn btn-default list-group-item';

      // add active class if option matches the slug
      if (this.props.selectedOption && this.props.selectedOption === option.slug) {
        btnClassNames += ' active';
      }

      var optionClick = this.onOptionClick.bind(this, option.id);

      rows.push(<button onClick={optionClick} key={option.id} type="button" className={btnClassNames}>{option.name}</button>);
    });

    //////////////

    return (
      <div className="panel panel-primary panel-default">
        <div className="panel-heading" role="tab" id={headingId}>
          <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent={accordianId} href={'#' + panelId} aria-expanded="false" aria-controls={panelId}>
              {this.props.title}
            </a>
          </h4>
        </div>
        <div id={panelId} className="panel-collapse collapse" role="tabpanel" aria-labelledby={headingId}>
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
