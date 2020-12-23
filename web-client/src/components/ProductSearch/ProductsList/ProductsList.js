import React from 'react'

import styled from './ProductsList.module.css'
import ProductItem from './ProductItem/ProductItem.js'

const ProductsList = () => {
    return (
        <div className={styled.container}>
            <ProductItem />
        </div>
    )
}

export default ProductsList
