import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import styled from './RedirectLink.module.css'
import { handleLogin } from '../../../redux/actions/drawerActions'

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
  url: PropTypes.string.isRequired,
}

export default RedirectLink
