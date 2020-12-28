import React from 'react'
import { Form, Input, Button } from 'antd'
import styled from './CustomForm.module.css'
import 'antd/dist/antd.css'

const CustomForm = ({ onFinish }) => {
  const [form] = Form.useForm()
  const onFinishHandler = values => {
    form.resetFields()
    onFinish(values)
  }

  return (
    <>
      <label className={styled.labelCustom}>Enter custom value</label>
      <Form layout="inline" name="CustomForm" form={form} onFinish={onFinishHandler}>
        <Form.Item name="custom" className={styled.formItems}>
          <Input
            className={styled.inputCustom}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="150"
            maxLength={4}
          />
        </Form.Item>
        <Form.Item className={styled.formItems}>
          <Button className={styled.greenBtn} htmlType="submit">
            Done
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CustomForm
