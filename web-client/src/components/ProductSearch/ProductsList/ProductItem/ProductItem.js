import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from './ProductItem.module.css'
import image from '../../../../assets/images/star.svg'
import star from '../../../../assets/images/star_active.svg'
import plus from '../../../../assets/images/plus.svg'
import { useFirebase, useFirestore } from 'react-redux-firebase'

const ProductItem = ({ product, favoriteProducts, userProfileByUid, auth }) => {
  // Used to r/w access to auth and firestore
  const firestore = useFirestore()
  const firebase = useFirebase()

  const [isActive, setIsActive] = useState(false)

  const onProfileChange = async options => {
    await firestore.collection('UserProfiles').doc(auth.uid).update(options)
    await firebase.updateAuth(options)
  }

  //add to favorites
  const handleAddToFavorite = id => {
    onProfileChange({ favorites: [...userProfileByUid[auth.uid].favorites, id] })
  }

  //delete from favorites
  const handleDeleteFromFavourite = id => {
    const favorites = userProfileByUid[auth.uid].favorites.filter(
      item => item !== id
    )
    onProfileChange({ favorites })
  }

  useEffect(() => {
    setIsActive(favoriteProducts.includes(product[0]))
  }, [isActive, favoriteProducts])

  return (
    <div className={styled.container}>
      {isActive ? (
        <img
          src={star}
          className={styled.star}
          onClick={() => {
            handleDeleteFromFavourite(product[0])
          }}
        />
      ) : (
        <img
          src={image}
          className={styled.star}
          onClick={() => {
            handleAddToFavorite(product[0])
          }}
        />
      )}

      <div className={styled.product}>
        <p className={styled.productName}>{product[1].name}</p>
        <p className={styled.productDescriptions}>
          {product[1].calories} kcal / 100 g
        </p>
      </div>
      <NavLink className={styled.plus} to={`/product-detail/${product[0]}`}>
        <img src={plus} className={styled.plus} />
      </NavLink>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.array.isRequired,
}

export default ProductItem
