import React from 'react';

class Counter extends React.Component {
  render() {
    return <span>{this.props.counter}</span>
  }
}

export default Counter