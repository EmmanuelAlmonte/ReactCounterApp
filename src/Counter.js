import React from 'react';

class Counter extends React.Component {
  updateCounterColor = () => {
    let currentColor
    if (this.props.counter === 0) {
      currentColor = 'black'
    } else {
      currentColor = this.props.counter > 0 ? 'green' : 'red'
    }
    return currentColor
  }


  render() {
    return <span className={this.updateCounterColor()}>{this.props.counter}</span>
  }
}

export default Counter