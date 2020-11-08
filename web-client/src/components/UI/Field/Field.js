import React from 'react'
import PropTypes from 'prop-types'
import { Error, FieldWrapper, Input, Label, Icon } from './style'

/**
 * @typedef Props
 * @type {object}
 * @prop {string} type — Type of Input component (email, password etc.)
 * @prop {string | number} value — Here you save that text which user entered in the field
 * @prop {string} name — Name property for Input component
 * @prop {string} label — Label text above Input
 * @prop {string} labelColor - the color of the label
 * @prop {string} placeholder — The placeholder for Input
 * @prop {boolean} isValid — Use Input border to indicate, that users input is valid
 * @prop {boolean} isTouched — If true, changes Input border to indicate, that user touched control
 * @prop {string} errorMessage — Show error message below Input
 * @prop {string} leftIconClassNames — Icon class name for Font Awesome
 * @prop {string} rightIconClassNames — Icon class name for Font Awesome
 * @prop {string} iconColor — Color of Icon
 * @prop {(event: object) => void} onChange — Input change handler
 */

/**
 * Our custom styled text Field, that contains Input, Label.
 * Optionally you can specify Icon and error text.
 * Color of border is changed depends from parameters like isValid or isTouched
 * @param {Props} props
 */
const field = props => (
  <FieldWrapper>
    <Label
      labelColor={props.labelColor}
      isValid={props.isValid}
      isTouched={props.isTouched}>
      {props.label}
    </Label>
    <Icon
      className={props.leftIconClassNames}
      leftIcon
      isValid={props.isValid}
      isTouched={props.isTouched}
      iconColor={props.iconColor}
    />
    <Input
      type={props.type}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      isValid={props.isValid}
      isTouched={props.isTouched}
      leftIconClassNames={props.leftIconClassNames}
      rightIconClassNames={props.rightIconClassNames}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
    <Icon
      className={props.rightIconClassNames}
      rightIcon
      isValid={props.isValid}
      isTouched={props.isTouched}
      iconColor={props.iconColor}
    />
    <Error isValid={props.isValid} isTouched={props.isTouched}>
      {props.errorMessage}
    </Error>
  </FieldWrapper>
)

field.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  isTouched: PropTypes.bool,
  errorMessage: PropTypes.string,
  leftIconClassNames: PropTypes.string,
  rightIconClassNames: PropTypes.string,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
}

field.defaultProps = {
  type: 'text',
  isValid: true,
  isTouched: false,
  iconColor: 'black',
}

export default field
