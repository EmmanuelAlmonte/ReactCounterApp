import React from 'react';


class Button extends React.Component {
  render () {
    return <div onClick={() =>{
      this.props.onClick(this.props.value)
    }
    } className='btn'> {this.props.text} </div>
  }
}

export default Button