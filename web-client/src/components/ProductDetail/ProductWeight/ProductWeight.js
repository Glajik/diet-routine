import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductSection from '../ProductSection/ProductSection'
import { Row, Col, Button } from 'antd'
import styled from './ProductWeight.module.css'

const ProductWeight = () => {
  const { id } = useParams()
  const products = useSelector(state => state.firestore.data.products) || {}
  const [weight, setWeight] = useState(100)

  const updateWeight = value => {
    return setWeight(value)
  }

  return (
    <>
      <ProductSection weight={weight} />
      <div className={styled.productWrapper}>
        <Row>
          <Col span={5} offset={1}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(150)}>
              150 {products[id].amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(200)}>
              200 {products[id].amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(250)}>
              250 {products[id].amountUnit}.
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={5} offset={1}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(300)}>
              300 {products[id].amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(350)}>
              350 {products[id].amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(400)}>
              400 {products[id].amountUnit}.
            </Button>
          </Col>
        </Row>
        <Row className={styled.productWeightButtons}>
          <Col span={6} offset={9}>
            <Button className={styled.whiteBtn}>Custom</Button>
          </Col>
        </Row>
        <Row>
          <Button className={styled.greenBtn}>Save Product</Button>
        </Row>
      </div>
    </>
  )
}

export default ProductWeight
