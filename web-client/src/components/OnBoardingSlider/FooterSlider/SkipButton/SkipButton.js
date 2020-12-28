import React from 'react'
import PropTypes from 'prop-types'
import styled from './SkipButton.module.css'

const SkipButton = ({ onClick }) => (
  <p className={styled.link} onClick={onClick}>
    Skip
  </p>
)

SkipButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SkipButton
