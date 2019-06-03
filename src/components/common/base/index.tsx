import React from 'react'

export default function Base(props) {
  const { children, onClick, ...style } = props

  return (
    <div onClick={onClick} style={style}>
      {children}
    </div>
  )
}
