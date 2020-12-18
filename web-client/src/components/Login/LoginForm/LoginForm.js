import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'antd'

import Input from '../../UI/Input/Input'
import styled from './LoginForm.module.css'
import { signIn } from '../../../redux/actions/authActions'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = user => {
    console.log('Received values of form: ', user)
    dispatch(signIn(user))
    form.resetFields()
  }

  return (
    <Form
      form={form}
      name="normal_login"
      id={styled.forms}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Input
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
          },
          {
            type: 'email',
            message: 'Please input valid Email!',
          },
        ]}
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
