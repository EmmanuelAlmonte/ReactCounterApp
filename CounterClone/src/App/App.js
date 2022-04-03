import React from 'react'
import Title from '../Title'
import Counter from '../Counter'
import Button from '../Button'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0, color: 'black' }
    this.updateColor = this.updateColor.bind(this)
    this.updateCounter = this.updateCounter.bind(this)
  }

  updateColor () {
    if (this.state.counter > 0) {
      this.setState({ color: 'green' })
    } else if (this.state.counter < 0) {
      this.setState({ color: 'red' })
    } else {
      this.setState({ color: 'black' })
    }
  }

  updateCounter (btnValue) {
    let currentState = this.state.counter
    if (btnValue === 'Decrease') {
      this.setState({ counter: (currentState -= 1) })
    } else if (btnValue === 'Increase') {
      this.setState({ counter: (currentState += 1) })
    } else {
      this.setState({ counter: 0 })
    }
  }

  handleClick (value) {
    this.updateCounter()
  }

  render () {
    return (
      <div className='container'>
        <div className='mini-container'>
          <Title title={'Counter'} />
        </div>
        <div className='mini-container'>
          <Counter
            count={this.state.counter}
            color={this.state.color}
            updateColor={this.updateColor}
          />
        </div>
        <div className='btn-container'>
          <Button
            handleClick={this.updateCounter}
            value={'Decrease'}
            counter={this.state.counter}
          />
          <Button
            handleClick={this.updateCounter}
            value={'Reset'}
            counter={this.state.counter}
          />
          <Button
            handleClick={this.updateCounter}
            value={'Increase'}
            counter={this.state.counter}
          />
        </div>
      </div>
    )
  }
}

export default App
