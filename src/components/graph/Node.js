import React from 'react';
import FORCE from '../../force';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

class Node extends React.Component {

    componentDidMount() {
      this.d3Node = d3.select(ReactDOM.findDOMNode(this))
        .datum(this.props.data)
        .call(FORCE.enterNode)
    }

    render() {
      return ( 
        <g className = 'node'>
            <image href={this.props.data.logo} width="70" height="70" x="-30" y="-30"></image>
        </g>
      );
    }
}

export default Node;