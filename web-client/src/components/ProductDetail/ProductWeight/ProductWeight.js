import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProductSection from '../ProductSection/ProductSection'
import CustomForm from './CustomForm/CustomForm'
import Modal from '../../ProfilePage/UserName/Modal'
import { Row, Col, Button, message  } from 'antd'
import styled from './ProductWeight.module.css'

const calc = (value, weight) => {
  let formulas = (value / 100) * weight
  let formulasResult = formulas.toFixed(1)
  return formulasResult
}

const calcTotals = (product, weight) => {
  const { calories = 0, proteins = 0, fats = 0, carbohydrates = 0 } = product
  return {
    calories: calc(calories, weight) ,
    proteins: calc(proteins, weight) ,
    fats: calc(fats, weight) ,
    carbohydrates: calc(carbohydrates, weight) 
  }
}

const ProductWeight = ({product, onSave}) => {
  const { amountUnit='g' } = product
  const [weight, setWeight] = useState(100)
  const [totals, setTotals] = useState(calcTotals(product, weight))
  const [modalVisible, setModalVisible] = useState(false)

  const updateWeight = value => {
    setWeight(value)
    const newTotals = calcTotals(product, value)
    setTotals(newTotals)
  }

  const onFinishHandler = value => {
    setModalVisible(false)
    updateWeight(value.custom)
  }

  const onClickHandler = () => {
    message.success('Success, add product')
    onSave(weight, totals)
  }

  return (
    <>
      <ProductSection weight={weight} product={product} totals={totals}/>
      <div className={styled.productWrapper}>
        <Row>
          <Col span={5} offset={1}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(150)}>
              150 {amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(200)}>
              200 {amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(250)}>
              250 {amountUnit}.
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={5} offset={1}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(300)}>
              300 {amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(350)}>
              350 {amountUnit}.
            </Button>
          </Col>
          <Col span={5} offset={3}>
            <Button className={styled.whiteBtn} onClick={() => updateWeight(400)}>
              400 {amountUnit}.
            </Button>
          </Col>
        </Row>
        <Row className={styled.productWeightButtons}>
          <Col span={6} offset={9}>
            <Button
              className={styled.whiteBtn}
              onClick={() => setModalVisible(true)}>
              Custom
            </Button>
            <Modal
              title="Custom"
              onClose={() => setModalVisible(false)}
              className={styled.customModalPlacement}
              visible={modalVisible}>
              <CustomForm
                custom={weight}
                onFinish={onFinishHandler}
                visible={modalVisible}
              />
            </Modal>
            {/* <p>{custom}</p> */}
          </Col>
        </Row>
        <Row>
          <Button className={styled.greenBtn}  onClick={onClickHandler}>
          <NavLink to={`/product-search/`}>Save Product</NavLink>
          </Button>
        </Row>
      </div>
    </>
  )
}

export default ProductWeight
