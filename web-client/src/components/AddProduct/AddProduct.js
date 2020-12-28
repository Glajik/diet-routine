import React, {useState} from 'react'
import {TopBarLayout} from '../../layouts'
import {Container} from '../UI'
import {categories} from './productCategories'
import {
  AddProductContentWrapper,
  AmountUnitLabel,
  CpfcLabel,
  FieldsWrapper,
  FieldWrapper,
  Form,
  Input,
  Option,
  SaveProductButton,
  Select
} from './style'

const AddProduct = (props) => {
  const [selectValue, setSelectValue] = useState('select_an_option')

  const createProduct = (event) => {
    event.preventDefault()
    console.log('clicked')
  }

  return (
    <Container>
      <TopBarLayout
        title="addNewProduct"
        history={props.history}>
        <AddProductContentWrapper>
          <Form>
            <FieldsWrapper>
              <Input type="text" placeholder="Write a product name"/>
              <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <Option
                  value="select_an_option"
                  style={{color: '#bfbfbf', display: 'none'}}
                  disabled>Select a category</Option>
                {categories.map((item, index) => (
                  <Option value={item.id} key={index}>
                    {item.name}
                  </Option>
                ))}
              </Select>
              <FieldWrapper>
                <CpfcLabel>Proteins</CpfcLabel>
                <Input type="number" placeholder="0" proteins/>
                <AmountUnitLabel>g</AmountUnitLabel>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Fats</CpfcLabel>
                <Input type="number" placeholder="0" fats/>
                <AmountUnitLabel>g</AmountUnitLabel>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Carbs</CpfcLabel>
                <Input type="number" placeholder="0" carbs/>
                <AmountUnitLabel>g</AmountUnitLabel>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Calories</CpfcLabel>
                <Input type="number" placeholder="0" calories/>
                <AmountUnitLabel>k</AmountUnitLabel>
              </FieldWrapper>
            </FieldsWrapper>
            <SaveProductButton onClick={createProduct}>
              Save Product
            </SaveProductButton>
          </Form>
        </AddProductContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

export default AddProduct