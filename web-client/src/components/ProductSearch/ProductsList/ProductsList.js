import React, { Fragment, useMemo } from 'react'

import styled from './ProductsList.module.css'
import ProductItem from './ProductItem/ProductItem.js'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const ProductsList = ({ products }) => {
  //Змінити щоб профіль отримувати тільки 1 раз!!!!!!!!!!!!!!!!
  const auth = useSelector(state => state.firebase.auth)

  // Set query and listeners to Firestore collection
  useFirestoreConnect([
    {
      collection: 'UserProfiles',
      doc: auth.uid,
    },
  ])

  // Get user profile from store
  const userProfileByUid = useSelector(state => state.firestore.data.UserProfiles)

  const objWithCategories = useMemo(() => {
    return products()
      .sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
      .reduce((acc, name) => {
        let firstLetter = name[1].name[0].toLocaleUpperCase()
        if (!acc[firstLetter]) {
          acc[firstLetter] = { title: firstLetter, data: [name] }
        } else {
          acc[firstLetter].data.push(name)
        }
        return acc
      }, {})
  }, [products])

  return (
    <div className={styled.container}>
      {userProfileByUid &&
        Object.values(objWithCategories).map((item, i) => (
          <Fragment key={i}>
            <p className={styled.firstLetter}>- {item.title} -</p>
            {item.data.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                userProfileByUid={userProfileByUid}
                auth={auth}
                favoriteProducts={userProfileByUid[auth.uid].favorites}
              />
            ))}
          </Fragment>
        ))}
    </div>
  )
}

export default ProductsList
