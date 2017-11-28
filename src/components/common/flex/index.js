import React from 'react'
import { Base } from '../'

export default function Flex(props) {
  const { children, ...componentProps } = props

  return (
    <Base display="flex" {...componentProps}>
      {children}
    </Base>
  )
}
