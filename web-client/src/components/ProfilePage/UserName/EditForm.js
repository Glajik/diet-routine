import React from 'react'
import { Form } from 'antd'
import { InputItem } from 'antd-mobile'
import Input from '../../UI/Input/Input'

const Item = Form.Item

const rules = [
  { required: true, message: 'Please input your name!' },
  { min: 3, message: 'Minimum 3 characters, please!'},
  { max: 64, message: 'Try to shorten somehow!'},
]


const EditForm = ({ name, onFinish }) => (
  <div>
    <Form name="edit_name" onFinish={onFinish} initialValues={{ name }}>
      <Item label="Your name" name="name" rules={rules}>
        <InputItem placeholder="John Doe" />
      </Item>
    </Form>
  </div>
)

export default EditForm
