import React from 'react'

import { Form } from 'antd'
import { useDispatch } from 'react-redux'

import Input from '../../UI/Input/Input'
import styled from './ForgotPasswordForm.module.css'
import { resetPassword } from '../../../redux/actions/authActions'
import { handleLogin } from '../../../redux/actions/drawerActions'

const ForgotPasswordForm = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = email => {
    dispatch(resetPassword(email))
    form.resetFields()
  }

  const handlerLogIn = () => {
    dispatch(handleLogin())
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
      <div className={styled.btnGroup}>
        <button type="submit" className={styled.greenBtn}>
          Send
        </button>
        <button className={styled.whiteBtn} onClick={handlerLogIn}>
          Back to Log in
        </button>
      </div>
    </Form>
  )
}

export default ForgotPasswordForm
