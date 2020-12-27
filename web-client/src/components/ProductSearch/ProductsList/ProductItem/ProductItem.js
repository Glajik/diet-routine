import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from './ProductItem.module.css'
import image from '../../../../assets/images/star.svg'
import star from '../../../../assets/images/star_active.svg'
import plus from '../../../../assets/images/plus.svg'

const ProductItem = ({ product }) => {
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
        <p className={styled.productName}>{product[1].name}</p>
        <p className={styled.productDescriptions}>
          {product[1].calories} kcal / 100 g
        </p>
      </div>
      <NavLink  className={styled.plus}  to={`/product-detail/${product[0]}`}>
        <img src={plus} className={styled.plus} />
      </NavLink>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.array.isRequired,
}

export default ProductItem
