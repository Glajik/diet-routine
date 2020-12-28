import React from 'react'
import { Form, Input, Button, Tooltip, Row, Col } from 'antd'
import styled from './CustomForm.module.css'

const CustomForm = ({ onFinish, visible }) => {
  const [form] = Form.useForm()

  const onFinishHandler = values => {
    form.resetFields()
    onFinish(values)
  }

  const layout = {
    labelCol: { offset: 2, span: 16 },
    wrapperCol: { span: 12 },
  }

  const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
  }

  return (
    <>
      <Form name="CustomForm" form={form} onFinish={onFinishHandler}>
        <Form.Item
          name="custom"
          className={styled.formItems}
          label="Enter custom value"
          // rules={[{ type: 'number', max: 10000 }]}
        >
          <Input
            className={styled.inputCustom}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="150"
            maxLength={4}
          />
        </Form.Item>
        <Form.Item>
          <Button className={styled.greenBtn} htmlType="submit">
            Done
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CustomForm
