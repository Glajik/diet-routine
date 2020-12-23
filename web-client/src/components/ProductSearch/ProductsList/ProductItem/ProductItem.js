import React from 'react'

import styled from './ProductItem.module.css'
import image from '../../../../assets/images/star.svg'
const ProductItem = () => {
    return (
        <div className={styled.container}>
            <img src={image} className={styled.star}/>
            <div className={styled.product}>
                <p className={styled.productName}>Abalone, raw</p>
                <p className={styled.productDescriptions}>100 kcal / 100 g</p>
            </div>  
        </div>
    )
}

export default ProductItem
