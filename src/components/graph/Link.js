import React from 'react';
import FORCE from '../../force';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

class Link extends React.Component {

    componentDidMount() {
      this.d3Link = d3.select(ReactDOM.findDOMNode(this))
        .datum(this.props.data)
        .call(FORCE.enterLink);
    }

    render() {
      return ( 
        <line className = 'link' />
      );
    }
}

export default Link;