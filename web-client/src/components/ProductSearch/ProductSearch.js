import React, { useCallback, useState } from 'react'
import { Container } from '../UI'
import { TopBarLayout } from '../../layouts'
import { Input } from 'antd'
import { colors } from '../../assets/colors'
import 'antd/dist/antd.css'

import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons'

import ProductsList from './ProductsList/ProductsList.js'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import ButtonAdd from './ButtonAdd/ButtonAdd'

const ProductSearch = props => {
  const [input, setInput] = useState('')

  useFirestoreConnect({
    collection: 'Products',
    storeAs: 'products',
  })

  const products = useSelector(state => state.firestore.data.products) || {}

  const productsArray = useCallback(() => {
    console.log(products)
    if (input.length === 0) {
      return Object.entries(products)
    }
    const patt = new RegExp(input.toLocaleUpperCase())
    const filterArray = Object.entries(products).filter(item =>
      patt.test(item[1].name.toLocaleUpperCase())
    )
    return filterArray
  }, [products, input])

  const onInputChange = e => {
    productsArray()
    setInput(e.target.value)
  }

  return (
    <Container>
      <TopBarLayout
        title="productSearch"
        settingsAction={() => console.log('Main Page')}
        history={props.history}>
        <Input
          onChange={onInputChange}
          value={input}
          bordered={false}
          size="large"
          placeholder="find a product"
          prefix={<SearchOutlined style={{ color: colors.green }} />}
          suffix={<CloseCircleOutlined style={{ color: colors.neutralDark }} />}
        />
        <ProductsList products={productsArray} />
        <ButtonAdd />
      </TopBarLayout>
    </Container>
  )
}

export default ProductSearch
