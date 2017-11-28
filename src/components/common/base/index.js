import React from 'react'

export default function Base(props) {
  const { children, display, onClick, ...style } = props

  return (
    <div display={display} onClick={onClick} style={style}>
      {children}
    </div>
  )
}
