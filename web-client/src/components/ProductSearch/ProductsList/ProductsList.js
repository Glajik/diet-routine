import React, { Fragment, useMemo } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import styled from './ProductsList.module.css'
import ProductItem from './ProductItem/ProductItem.js'


const ProductsList = () => {
  useFirestoreConnect({
    collection: 'Products',
    storeAs: 'products',
  })

  const products = useSelector(state => state.firestore.data.products) || {}
  console.log(Object.values(products))

  const objWithCategories = useMemo(() => {
    return Object.values(products)
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .reduce((acc, name) => {
        let firstLetter = name.name[0].toLocaleUpperCase()
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
      {Object.values(objWithCategories).map((item, i) => (
        <Fragment key={i}>
          <p className={styled.firstLetter}>- {item.title} -</p>
          {item.data.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default ProductsList
