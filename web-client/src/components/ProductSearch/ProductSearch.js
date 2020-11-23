import React from 'react'
import {Container, TopBar, BottomBar} from '../UI'

import {ProductSearchContentWrapper} from './style'
const ProductSearch = (props) => {
  return (
    <Container>
      <TopBar
        pageName="productSearch"
        pageHasSettings={true}
        history={props.history}/>
      <ProductSearchContentWrapper>
        <h2>Product Search</h2>
      </ProductSearchContentWrapper>
      <BottomBar
        currentPage="productSearch"
        history={props.history}/>
    </Container>
  )
}

export default ProductSearch