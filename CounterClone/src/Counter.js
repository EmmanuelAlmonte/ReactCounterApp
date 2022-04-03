import React, { useEffect } from 'react'

const Counter = ({ count, color, updateColor }) => {
  useEffect(() => {
    updateColor()
  }, [count])
  return <p className={`count ${color}`}>{count}</p>
}

export default Counter
