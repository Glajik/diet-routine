import React from 'react'
import PropTypes from 'prop-types'

import styled from './QuestionBeforeLink.module.css'

const QuestionBeforeLink = ({ text }) => {
  return <p className={styled.question}>{text}</p>
}

QuestionBeforeLink.propTypes = {
  text: PropTypes.string.isRequired,
}

export default QuestionBeforeLink
