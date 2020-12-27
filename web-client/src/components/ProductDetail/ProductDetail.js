import React from 'react'
import ProductWeight from './ProductWeight'
import { Container } from '../UI'
import { TopBarLayout } from '../../layouts'
import { ProductDetailContentWrapper } from './style'

const ProductDetail = () => {
  return (
    <Container>
      <TopBarLayout title="addProduct">
        <ProductDetailContentWrapper>
          <ProductWeight />
        </ProductDetailContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default ProductDetail
