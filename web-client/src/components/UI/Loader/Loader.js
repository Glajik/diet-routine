import React from 'react'
import classes from './Loader.module.css'

const loader = (props) => (
  <div style={props.style} className={classes.Loader}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default loader