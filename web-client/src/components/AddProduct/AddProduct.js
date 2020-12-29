import React, {useState} from 'react'
import {connect} from 'react-redux'
import {useFirestore} from 'react-redux-firebase'
import {TopBarLayout} from '../../layouts'
import {Container} from '../UI'
import {categories} from './productCategories'
import {checkValidity} from './checkValidity'
import {chooseErrorMessage} from './chooseErrorMessage'
import {disableButton} from './disabledButton'
import {getProductType} from './getProductType'

import {
  AddProductContentWrapper,
  AmountUnitLabel,
  CpfcLabel,
  Error,
  FieldsWrapper,
  FieldWrapper,
  Form,
  Input,
  Option,
  SaveProductButton,
  SelectWrapper,
  Select
} from './style'

const AddProduct = (props) => {
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true)
  const [controls, setControls] = useState({
    productName: {
      name: 'productName',
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true,
        minLength: 2,
        maxLength: 60
      }
    },
    selectCategory: {
      name: 'selectCategory',
      value: 'select_an_option',
      isValid: false,
      isTouched: false,
      errorMessage: 'Select category',
      rules: {
        required: true
      }
    },
    proteins: {
      name: 'proteins',
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true
      }
    },
    fats: {
      name: 'fats',
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true
      }
    },
    carbs: {
      name: 'carbs',
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true
      }
    },
    calories: {
      name: 'calories',
      value: '',
      isValid: false,
      isTouched: false,
      errorMessage: 'Enter the field',
      rules: {
        required: true
      }
    }
  })

  const firestore = useFirestore()

  const changeHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].value = event.target.value
    fields[name].isValid = checkValidity(event.target.value, controls[name].rules)
    fields.productName.errorMessage = chooseErrorMessage(controls)

    setIsSubmitBtnDisabled(disableButton(fields))
    setControls(fields)
  }

  const blurHandler = (event) => {
    const fields = {...controls}
    const {name} = event.target

    fields[name].isTouched = true

    if (fields.selectCategory.name) {
      fields.selectCategory.isValid = fields.selectCategory.value !== 'select_an_option'
    } else {
      fields[name].isValid = checkValidity(event.target.value, controls[name].rules)
      fields.productName.errorMessage = chooseErrorMessage(controls)
    }

    setIsSubmitBtnDisabled(disableButton(fields))
    setControls(fields)
  }

  const createProduct = (event) => {
    event.preventDefault()

    let productType = getProductType(controls.selectCategory.value)

    const formData = {
      name: controls.productName.value,
      calories: controls.calories.value,
      proteins: controls.proteins.value,
      fats: controls.fats.value,
      carbohydrates: controls.carbs.value,
      type: productType,
      amountUnit: productType === 'liquid' ? 'ml' : 'g',
      category: controls.selectCategory.value,
      tags: [''],
      author: props.userId,
      isVerified: false,
      isStandard: false
    }

    console.log('FormData: ', formData)

    firestore.collection('Products').add(formData)

    const fields = {...controls}
    const form = []

    Object.values(fields).forEach(value => form.push(value))

    form.forEach(item => {
      if (item.name === 'selectCategory') {
        item.value = 'select_an_option'
      } else {
        item.value = ''
      }

      item.isValid = false
      item.isTouched = false
    })

    const emptyControls = {
      productName: form[0],
      selectCategory: form[1],
      proteins: form[2],
      fats: form[3],
      carbs: form[4],
      calories: form[5]
    }

    setControls(emptyControls)
    setIsSubmitBtnDisabled(true)
    alert('You have successfully created new product')
  }

  return (
    <Container>
      <TopBarLayout
        title="addNewProduct"
        history={props.history}>
        <AddProductContentWrapper>
          <Form>
            <FieldsWrapper>
              <FieldWrapper>
                <Input
                  type="text"
                  name={controls.productName.name}
                  value={controls.productName.value}
                  isValid={controls.productName.isValid}
                  isTouched={controls.productName.isTouched}
                  placeholder="Write a product name"
                  onChange={changeHandler}
                  onBlur={blurHandler}/>
                <Error
                  isValid={controls.productName.isValid}
                  isTouched={controls.productName.isTouched}>
                  {controls.productName.errorMessage}
                </Error>
              </FieldWrapper>
              <SelectWrapper>
                <Select
                  name={controls.selectCategory.name}
                  value={controls.selectCategory.value}
                  isValid={controls.selectCategory.isValid}
                  isTouched={controls.selectCategory.isTouched}
                  onChange={changeHandler}
                  onBlur={blurHandler}>
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
                <Error
                  isValid={controls.selectCategory.isValid}
                  isTouched={controls.selectCategory.isTouched}>
                  {controls.selectCategory.errorMessage}
                </Error>
              </SelectWrapper>
              <FieldWrapper>
                <CpfcLabel>Proteins</CpfcLabel>
                <Input
                  type="number"
                  name={controls.proteins.name}
                  value={controls.proteins.value}
                  isValid={controls.proteins.isValid}
                  isTouched={controls.proteins.isTouched}
                  placeholder="0"
                  proteins
                  onChange={changeHandler}
                  onBlur={blurHandler}/>
                <AmountUnitLabel>g</AmountUnitLabel>
                <Error
                  isValid={controls.proteins.isValid}
                  isTouched={controls.proteins.isTouched}>
                  {controls.proteins.errorMessage}
                </Error>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Fats</CpfcLabel>
                <Input
                  type="number"
                  name={controls.fats.name}
                  value={controls.fats.value}
                  isValid={controls.fats.isValid}
                  isTouched={controls.fats.isTouched}
                  placeholder="0"
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  fats/>
                <AmountUnitLabel>g</AmountUnitLabel>
                <Error
                  isValid={controls.fats.isValid}
                  isTouched={controls.fats.isTouched}>
                  {controls.fats.errorMessage}
                </Error>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Carbs</CpfcLabel>
                <Input
                  type="number"
                  name={controls.carbs.name}
                  value={controls.carbs.value}
                  isValid={controls.carbs.isValid}
                  isTouched={controls.carbs.isTouched}
                  placeholder="0"
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  carbs/>
                <AmountUnitLabel>g</AmountUnitLabel>
                <Error
                  isValid={controls.carbs.isValid}
                  isTouched={controls.carbs.isTouched}>
                  {controls.carbs.errorMessage}
                </Error>
              </FieldWrapper>
              <FieldWrapper>
                <CpfcLabel>Calories</CpfcLabel>
                <Input
                  type="number"
                  name={controls.calories.name}
                  value={controls.calories.value}
                  isValid={controls.calories.isValid}
                  isTouched={controls.calories.isTouched}
                  placeholder="0"
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  calories/>
                <AmountUnitLabel>k</AmountUnitLabel>
                <Error
                  isValid={controls.calories.isValid}
                  isTouched={controls.calories.isTouched}>
                  {controls.calories.errorMessage}
                </Error>
              </FieldWrapper>
            </FieldsWrapper>
            <SaveProductButton
              disabled={isSubmitBtnDisabled}
              onClick={createProduct}>
              Save Product
            </SaveProductButton>
          </Form>
        </AddProductContentWrapper>
      </TopBarLayout>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.profile.currentUserId
  }
}

export default connect(mapStateToProps)(AddProduct)