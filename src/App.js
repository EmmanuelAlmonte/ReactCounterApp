import React from 'react'
import './App.css'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='title'><Title title='Counter'/></div>
        <div className='counter'><Counter/></div>
        <div><Button text="Reset"/></div>
      </div>
    )
  }
}

export default App
