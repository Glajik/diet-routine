import React from 'react'
import PropTypes from 'prop-types'

import { Form, Input as InputComponent } from 'antd'
import styled from './Input.module.css'

const Input = ({ name, label, rules, placeholder, type }) => {
  return (
    <Form.Item
      labelCol={{ span: 24 }}
      className={styled.inputItem}
      name={name}
      label={label}
      rules={rules}>
      <InputComponent
        placeholder={placeholder}
        className={styled.input}
        type={type}
      />
    </Form.Item>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
