import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductSection from '../ProductSection/ProductSection'
import CustomForm from './CustomForm/CustomForm'
import Modal from '../../ProfilePage/UserName/Modal'
import { Row, Col, Button } from 'antd'
import styled from './ProductWeight.module.css'

const ProductWeight = () => {
  const { id } = useParams()
  const products = useSelector(state => state.firestore.data.products) || {}
  const [weight, setWeight] = useState(100)
  const [modalVisible, setModalVisible] = useState(false)
  let custom = ''

  const updateWeight = value => {
    return setWeight(value)
  }

  const onFinishHandler = value => {
    setModalVisible(false)
    setWeight(value.custom)
  }

  return (
    <>
      <ProductSection weight={weight} custom={custom} />
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
                custom={custom}
                onFinish={onFinishHandler}
                visible={modalVisible}
              />
            </Modal>
            <p>{custom}</p>
          </Col>
        </Row>
        <Row>
          <Button
            className={styled.greenBtn}
            onClick={() => console.log('Save Product Button', 'hi')}>
            Save Product
          </Button>
        </Row>
      </div>
    </>
  )
}

export default ProductWeight
