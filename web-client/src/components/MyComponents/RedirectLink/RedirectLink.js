import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import styled from './RedirectLink.module.css'


const RedirectLink = ({ text, callback }) => {
  const dispatch = useDispatch()
  return (
    <p className={styled.link} onClick={() => dispatch(callback())}>
      {text}
    </p>
  )
}

RedirectLink.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default RedirectLink
