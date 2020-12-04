import React from 'react'
import { Container } from '../UI'
import { TopBottomBarsLayout } from '../../layouts'
import { ProductSearchContentWrapper } from './style'
import { Input } from 'antd'
import { colors } from '../../assets/colors'

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
        <ProductSearchContentWrapper>
          <Input
            style={{ border: 'none !important' }}
            bordered={false}
            placeholder='find a product'
            prefix={<SearchOutlined style={{ color: colors.green }} />}
            suffix={<CloseCircleOutlined />}
          />
        </ProductSearchContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default ProductSearch