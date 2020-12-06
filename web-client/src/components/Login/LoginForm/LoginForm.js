import React from 'react'
import { Form, Input } from 'antd'

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
      <Form.Item
        labelCol={{ span: 24 }}
        className={styled.inputItem}
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your Email' }]}>
        <Input placeholder="your email" className={styled.input} />
      </Form.Item>
      <Form.Item
        labelCol={{ span: 24 }}
        className={styled.inputItem}
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input placeholder="your password" className={styled.input} />
      </Form.Item>

      <button type="submit" className={styled.greenBtn}>
        Log in
      </button>
    </Form>
  )
}

export default LoginForm
