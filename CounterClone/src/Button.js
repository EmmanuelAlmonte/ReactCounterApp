import React from 'react'

const Button = ({value, handleClick, counter}) => {
  return(
    <div onClick={() => {handleClick(value)}} className='btn'>{value}</div>
  )
}


export default Button