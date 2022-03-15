import React from 'react'

const Title = (props) => {
  const textContent = props.title ? props.title : 'No title'
  return <h1>{textContent}</h1>
}

export default Title
