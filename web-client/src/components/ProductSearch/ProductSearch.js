import React from 'react'
import { Container } from '../UI'
import { TopBottomBarsLayout } from '../../layouts'
import { ProductSearchContentWrapper } from './style'

const ProductSearch = (props) => {
  return (
    <Container>
      <TopBottomBarsLayout
        title="productSearch"
        settingsAction={() => console.log('Main Page')}
        history={props.history}>
        <ProductSearchContentWrapper>
          <h2>Product Search</h2>
          <p style={{ marginTop: 40 }}>Now you can press comeback button. Then you can see that you will be returned to the last page, instead of the Main page.</p>
        </ProductSearchContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default ProductSearch