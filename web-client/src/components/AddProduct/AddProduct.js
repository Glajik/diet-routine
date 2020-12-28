import React from 'react'
import {Container} from '../UI'
import {TopBarLayout} from '../../layouts'
import {AddProductContentWrapper, Form, Input} from './style'

const AddProduct = (props) => {
  return (
    <Container>
      <TopBarLayout
        title="addNewProduct"
        history={props.history}>
        <AddProductContentWrapper>
           <Form>
             <Input placeholder="Write"/>
           </Form>
        </AddProductContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default AddProduct