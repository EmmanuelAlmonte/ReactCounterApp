import React from 'react'
import './App.css'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

class App extends React.Component {
  state = {counter: 1}
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
            <Button text='Decrease' />
          </div>
          <div className='btn-reset'>
            <Button text='Reset' />
          </div>
          <div className='btn-increase'>
            <Button text='Increase' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
