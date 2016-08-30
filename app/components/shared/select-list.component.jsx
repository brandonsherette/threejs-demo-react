import React from 'react';

var SelectListComponent = React.createClass({
  render: function() {
    var options = [];

    console.info(this.props);

    this.props.options.forEach((option) => {
      options.push(<option key={option.id} value={option.slug}>{option.name}</option>);
    })

    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <select className="form-control">
          {options}
        </select>
      </div>
    );
  }
});

export default SelectListComponent;
