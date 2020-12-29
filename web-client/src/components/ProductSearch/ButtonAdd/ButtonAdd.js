import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from './ButtonAdd.module.css'

const ButtonAdd = () => {
  const history = useHistory()
  const handleAddBtn = () => history.push('/add-product')
  return (
    <div className={styled.button}>
      <button className={styled.button} onClick={handleAddBtn}>
        + Add new product
      </button>
    </div>
  )
}

export default ButtonAdd
