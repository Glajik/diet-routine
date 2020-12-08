import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from './ButtonBack.module.css'

const ButtonBack = () => {
  const history = useHistory()
  const handlerBack = () => {
    history.goBack()
  }

  return (
    <p className={styled.btnBack} onClick={handlerBack}>
      Back
    </p>
  )
}

export default ButtonBack
