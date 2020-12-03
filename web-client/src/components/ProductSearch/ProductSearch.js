import React from 'react'
import {Container} from '../UI'
import {TopBarLayout} from '../../layouts'
import {ProductSearchContentWrapper} from './style'

const ProductSearch = (props) => {
  return (
    <Container>
      <TopBarLayout
        title="productSearch"
        history={props.history}>
        <ProductSearchContentWrapper>
          <h2>Product Search</h2>
          <p style={{marginTop: 40}}>Now you can press comeback button. Then you can see that you will be returned to the last page, instead of the Main page.</p>
        </ProductSearchContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default ProductSearch