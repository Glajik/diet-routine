import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from './ProductItem.module.css'
import image from '../../../../assets/images/star.svg'
import star from '../../../../assets/images/star_active.svg'
import plus from '../../../../assets/images/plus.svg'

const ProductItem = ({product}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styled.container}>
      {isActive ? (
        <img
          src={star}
          className={styled.star}
          onClick={() => setIsActive(!isActive)}
        />
      ) : (
        <img
          src={image}
          className={styled.star}
          onClick={() => setIsActive(!isActive)}
        />
      )}
      
      <div className={styled.product}>
        <p className={styled.productName}>{product.name}</p>
        <p className={styled.productDescriptions}>{product.calories} kcal / 100 g</p>
      </div>
      <img src={plus} className={styled.plus} />
    </div>
  )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem
