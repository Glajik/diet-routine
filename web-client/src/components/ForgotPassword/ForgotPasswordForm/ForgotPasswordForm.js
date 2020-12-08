import React from 'react'

import { Form } from 'antd'
import Input from '../../UI/Input/Input'
import styled from './ForgotPasswordForm.module.css'

const ForgotPasswordForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <Form
      name="normal_login"
      id={styled.forms}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Input
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your Email' }]}
        placeholder="your email"
      />
      <button type="submit" className={styled.greenBtn}>
        Continue
      </button>
    </Form>
  )
}

export default ForgotPasswordForm
