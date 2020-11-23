import React from 'react'
import {Container, TopBar} from '../UI'
import {AddProductContentWrapper} from './style'

const AddProduct = (props) => {
  return (
    <Container>
      <TopBar
        pageName="addProduct"
        history={props.history}/>
      <AddProductContentWrapper>
        <h2>Add Product</h2>
      </AddProductContentWrapper>
    </Container>
  )
}

export default AddProduct