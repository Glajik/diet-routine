import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import styled from './ProductSection.module.css'

const ProductSection = ({ weight }) => {
  const { id } = useParams()
  const products = useSelector(state => state.firestore.data.products) || {}
  console.log(products[id])

  let kcalResult = (products[id].calories / 100) * weight
  let kcalFixedResult = kcalResult.toFixed(2)
  let proteinResult = (products[id].proteins / 100) * weight
  let proteinFixedResult = proteinResult.toFixed(2)
  let fatsResult = (products[id].fats / 100) * weight
  let fatsFixedResult = fatsResult.toFixed(2)
  let carbsResult = (products[id].carbohydrates / 100) * weight
  let carbsFixedResult = carbsResult.toFixed(2)

  return (
    <>
      <div className={styled.productSection}>
        <Row className={styled.productSectionRow}>
          <Col span={18} className={styled.productName}>
            <p>{products[id].name}</p>
          </Col>
          <Col span={6} className={styled.productName}>
            {weight} {products[id].amountUnit}.
          </Col>
        </Row>
        <Row className={styled.productSectionRowCcal}>
          <Col span={18} className={styled.productCalories}>
            {products[id].calories} ccal / 100 g.
          </Col>
          <Col span={6} className={styled.productCaloriesSpan}>
            {kcalFixedResult} kcal
          </Col>
        </Row>
        <Row className={styled.productSectionRowPFC}>
          <Col span={6} offset={2}>
            Protein
          </Col>
          <Col span={6} offset={2}>
            Fats
          </Col>
          <Col span={6} offset={2}>
            Carbs
          </Col>
        </Row>
        <Row className={styled.productSectionRowPFCweight}>
          <Col span={6} offset={2}>
            {proteinFixedResult} g.
          </Col>
          <Col span={6} offset={2}>
            {fatsFixedResult} g.
          </Col>
          <Col span={6} offset={2}>
            {carbsFixedResult} g.
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductSection
