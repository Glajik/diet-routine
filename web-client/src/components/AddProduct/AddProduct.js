import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '../UI'
import {TopBarLayout} from '../../layouts'
import {AddProductContentWrapper} from './style'

const AddProduct = (props) => {
  return (
    <Container>
      <TopBarLayout
        title="addProduct"
        history={props.history}>
        <AddProductContentWrapper>
          <h2>Add Product</h2>
          <Link to="/product-search">Link ro Product Search</Link>
        </AddProductContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default AddProduct