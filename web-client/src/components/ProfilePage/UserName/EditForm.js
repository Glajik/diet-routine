import React, { useEffect, useState } from 'react'
import { Form } from 'antd'
import { InputItem } from 'antd-mobile'

const Item = Form.Item

const rules = [
  { required: true, message: 'Please input your name!' },
  { min: 3, message: 'Minimum 3 characters, please!'},
  { max: 64, message: 'Try to shorten somehow!'},
]


const EditForm = ({ name, onFinish }) => {
  const [ref, setRef] = useState()
  
  // Used for autofocus
  useEffect(() => {
    if (ref) ref.focus()
  })

  return (
    <div>
      <Form name="edit_name" onFinish={onFinish} initialValues={{ name }}>
        <Item label="Your name" name="name" rules={rules}>
          <InputItem placeholder="John Doe" ref={el => setRef(el)} />
        </Item>
      </Form>
    </div>
  )
}

export default EditForm
