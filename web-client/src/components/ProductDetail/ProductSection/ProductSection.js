import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import styled from './ProductSection.module.css'

const ProductSection = ({ weight = 0, product = {}, totals = {} }) => {
  const { name, amountUnit, calories } = product
  console.log(product)

  return (
    <>
      <div className={styled.productSection}>
        <Row className={styled.productSectionRow}>
          <Col span={18} className={styled.productName}>
            <p>{name}</p>
          </Col>
          <Col span={6} className={styled.productName}>
            {weight} {amountUnit || 0}.
          </Col>
        </Row>
        <Row className={styled.productSectionRowCcal}>
          <Col span={18} className={styled.productCalories}>
            {calories || 0} kcal / 100 g.
          </Col>
          <Col span={6} className={styled.productCaloriesSpan}>
            {totals.calories || 0} kcal
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
            {totals.proteins || 0} g.
          </Col>
          <Col span={6} offset={2}>
            {totals.fats || 0} g.
          </Col>
          <Col span={6} offset={2}>
            {totals.carbohydrates || 0} g.
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductSection
