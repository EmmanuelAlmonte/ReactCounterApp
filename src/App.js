import React from 'react'
import './App.css'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

class App extends React.Component {
  state = { counter: 0 }

  updateCounter = value => {
    let counterValue
    if (value === 0) {
      counterValue = value
    } else {
      counterValue = this.state.counter + value
    }
    this.setState({ counter: counterValue })
  }

  render () {
    return (
      <div className='container'>
        <div className='title'>
          <Title title='Counter' />
        </div>
        <div className='counter'>
          <Counter counter={this.state.counter} />
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
            <Button value={1} onClick={this.updateCounter} text='Increase' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
