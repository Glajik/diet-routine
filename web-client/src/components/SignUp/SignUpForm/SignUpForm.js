import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'antd'

import Input from '../../UI/Input/Input'
import styled from './SignUpForm.module.css'
import { signUp } from '../../../redux/actions/authActions'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = user => {
    dispatch(signUp(user))
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
      <Input
        name="retypePassword"
        type="password"
        label="Retype Password"
        rules={[
          { required: true, message: 'Please input your Password!' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(
                'The two passwords that you entered do not match!'
              )
            },
          }),
        ]}
        placeholder="your password"
      />
      <button type="submit" className={styled.greenBtn}>
        Sign up
      </button>
    </Form>
  )
}

export default SignUpForm
