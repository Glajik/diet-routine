import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import styled from './RedirectLink.module.css'

const RedirectLink = ({ text, url }) => {
  return (
    <NavLink to={url} className={styled.link}>
      {text}
    </NavLink>
  )
}

RedirectLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default RedirectLink
