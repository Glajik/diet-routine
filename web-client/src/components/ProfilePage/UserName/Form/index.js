import React, { useEffect, useState } from 'react'
import { Form, Button } from 'antd'
import { InputItem } from 'antd-mobile'
import styles from './index.module.css'

const Item = Form.Item

const rules = [
  { required: true, message: 'Please input your name!' },
  { min: 3, message: 'Minimum 3 characters, please!' },
  { max: 64, message: 'Try to shorten somehow!' },
]

const UserNameForm = ({ name, onFinish, visible }) => {
  const [ref, setRef] = useState()
  const [form] = Form.useForm()
  
  const onFinishHandler = (values) => {
    form.resetFields()
    onFinish(values)
  }
  
  // Activate input automatically
  useEffect(() => {
    if (ref) ref.focus()
  })
  
  return (
    <div>
      <Form name="UserNameForm" className={styles.UserNameForm} onFinish={onFinishHandler} initialValues={{ name }}>
        <Item label="Your name" name="name" rules={rules}>
          <InputItem placeholder="John Doe" ref={el => setRef(el)} />
        </Item>
          <Item>
            <div className={styles.actionBar}>
              <Button
                className={styles.doneButton}
                type="primary"
                shape="round"
                htmlType="submit"
              >
                Done
              </Button>
            </div>
          </Item>
      </Form>
    </div>
  )
}

export default UserNameForm
