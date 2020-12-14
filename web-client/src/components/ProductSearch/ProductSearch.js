import React from 'react'
import { Container } from '../UI'
import { TopBottomBarsLayout } from '../../layouts'
import { Input } from 'antd'
import { colors } from '../../assets/colors'
import 'antd/dist/antd.css'

import {
  CloseCircleOutlined,
  SearchOutlined
} from '@ant-design/icons'

const ProductSearch = props => {
  return (
    <Container>
      <TopBottomBarsLayout
        title='productSearch'
        settingsAction={() => console.log('Main Page')}
        history={props.history}>
        <Input
          bordered={false}
          size="large"
          placeholder='find a product'
          prefix={<SearchOutlined style={{ color: colors.green }} />}
          suffix={<CloseCircleOutlined style={{ color: colors.neutralDark }} />}
        />
      </TopBottomBarsLayout>
    </Container>
  )
}

export default ProductSearch