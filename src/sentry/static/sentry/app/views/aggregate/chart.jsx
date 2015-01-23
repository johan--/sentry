/*** @jsx React.DOM */
var React = require("react");

var FlotChart = require("../../components/flotChart");
var PropTypes = require("../../proptypes");

var AggregateChart = React.createClass({
  propTypes: {
    aggregate: PropTypes.Aggregate.isRequired
  },

  render: function() {
    var points = [{x: 1421722207, y: 50}, {x: 1421722267, y: 150}];

    return (
      <div className="box">
        <div className="box-content with-padding">
          <FlotChart
              points={points}
              className="chart" />
        </div>
      </div>
    );
  }

});

module.exports = AggregateChart;