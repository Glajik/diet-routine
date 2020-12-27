import React, { Fragment, useMemo } from 'react'

import styled from './ProductsList.module.css'
import ProductItem from './ProductItem/ProductItem.js'


const ProductsList = ({ products }) => {
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
