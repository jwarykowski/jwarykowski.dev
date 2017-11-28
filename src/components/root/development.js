import { Base } from '../common'
import React from 'react'

import Application from '../application'
import DevTools from '../utilities/dev-tools'

export default function Root() {
  return (
    <Base>
      <Application />
      <DevTools />
    </Base>
  )
}
