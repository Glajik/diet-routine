import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import styled from './ProductSection.module.css'

const ProductSection = ({ weight }) => {
  const { id } = useParams()
  const products = useSelector(state => state.firestore.data.products) || {}
  const { name, amountUnit, calories, proteins, fats, carbohydrates } = products[id]

  const calc = value => {
    let formulas = (value / 100) * weight
    let formulasResult = formulas.toFixed(1)
    return formulasResult
  }

  return (
    <>
      <div className={styled.productSection}>
        <Row className={styled.productSectionRow}>
          <Col span={18} className={styled.productName}>
            <p>{name}</p>
          </Col>
          <Col span={6} className={styled.productName}>
            {weight} {amountUnit}.
          </Col>
        </Row>
        <Row className={styled.productSectionRowCcal}>
          <Col span={18} className={styled.productCalories}>
            {calories} ccal / 100 g.
          </Col>
          <Col span={6} className={styled.productCaloriesSpan}>
            {calc(calories)} kcal
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
            {calc(proteins)} g.
          </Col>
          <Col span={6} offset={2}>
            {calc(fats)} g.
          </Col>
          <Col span={6} offset={2}>
            {calc(carbohydrates)} g.
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductSection
