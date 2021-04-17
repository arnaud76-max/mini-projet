/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import './styles.css'
 
const StylesComponentOne = () => {
  return (
    <div className="hello" id="hello-div">
      Hello
    </div>
  )
}
 
const StylesComponentTwo = () => {
  const [value, setValue] = useState(false)
 
  const style = {
    color: 'red',
    backgroundColor: value ? 'blue' : 'green',
  }
 
  return (
    <div
      onMouseEnter={() => setValue(true)}
      onMouseLeave={() => setValue(false)}
      style={style}
    >
      Hello
    </div>
  )
}
 
const useStyles = makeStyles((theme) => ({
  root: ({ hover }) => ({
    color: 'red',
    backgroundColor: 'green',
    margin: theme.spacing(2),
    fontSize: hover ? '1.2rem' : '1rem',
  }),
}))
 
const StylesComponentThree = () => {
  const [hover, setHover] = useState(false)
  const classes = useStyles({ hover })
 
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classes.root}
    >
      Hello
    </div>
  )
}
 
export default StylesComponentThree