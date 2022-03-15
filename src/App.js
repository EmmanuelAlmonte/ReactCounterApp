import React from 'react'
import './App.css'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

class App extends React.Component {
  state = { counter: 0, counterColor: 'black' }

  updateCounterColor = () => {
    let currentColor
    if (this.state.counter === 0) {
      currentColor = 'black'
    } else {
      currentColor = this.state.counter > 0 ? 'green' : 'red'
    }
    this.setState({ counterColor: currentColor })
  }

  updateCounter = value => {
    this.updateCounterColor()
    let counterValue
    if (value === 0) {
      counterValue = value
    } else {
      counterValue = this.state.counter + value
    }
    this.setState({ counter: counterValue })
    this.updateCounterColor()
  }
  render () {
    return (
      <div className='container'>
        <div className='title'>
          <Title title='Counter' />
        </div>
        <div className='counter'>
          <Counter
          onColorChange={this.updateCounterColor}
            counterColor={this.state.counterColor}
            counter={this.state.counter}
          />
        </div>
        <div className='btn-container'>
          <div className='btn-decrease'>
            <Button value={-1} onClick={this.updateCounter} text='Decrease' />
          </div>
          <div className='btn-reset'>
            <Button value={0} onClick={this.updateCounter} text='Reset' />
          </div>
          {/* Make buttons on smaller screens look nicer */}
          <div className='btn-increase'>
            <Button value={1}  onClick={this.updateCounter} text='Increase' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
