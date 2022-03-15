import React from 'react';

class Counter extends React.Component {
  render() {
    return <span className={this.props.counterColor}>{this.props.counter}</span>
  }
}

export default Counter