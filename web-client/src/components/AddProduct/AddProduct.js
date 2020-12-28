import React from 'react'
import { Input, Select, Cascader } from 'antd'
import {Container} from '../UI'
import {TopBarLayout} from '../../layouts'
import {AddProductContentWrapper, Form} from './style'
import './antdInputCustomise.css'

const AddProduct = (props) => {
  const { Option } = Select

  return (
    <Container>
      <TopBarLayout
        title="addNewProduct"
        history={props.history}>
        <AddProductContentWrapper>
           <Form>
             <Input id="productName" className="product-name" placeholder="Write a product name"/>
             <Input.Group compact>
               <Select style={{ width: '100%' }} placeholder="Select Address">
                 <Option value="Home">Home</Option>
                 <Option value="Company">Company</Option>
               </Select>
             </Input.Group>
           </Form>
        </AddProductContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default AddProduct