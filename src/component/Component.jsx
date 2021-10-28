import React from 'react'

import './Component.module.css'

const Component = (props) => (
  <>
    <h1>Hello! My name is {props.name}</h1>
    <ul>
      <li>Super Mario Bros released in 1985</li>
      <li>Game was just 31 Kilobytes</li>
    </ul>
  </>
)

export default Component
