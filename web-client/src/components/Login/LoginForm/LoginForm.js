import React from 'react'

import { Form } from 'antd'
import Input from '../../UI/Input/Input'
import styled from './LoginForm.module.css'

const LoginForm = () => {
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
      <Input
        name="password"
        label="Password"
        type="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        placeholder="your password"
      />
      <button type="submit" className={styled.greenBtn}>
        Log in
      </button>
    </Form>
  )
}

export default LoginForm
