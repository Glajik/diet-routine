import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './style'

/**
 * @typedef Props
 * @type {object}
 * @prop {string} type
 * @prop {string} btnType
 * @prop {bool} disabled
 * @prop {string} leftIconClassNames
 * @prop {string} rightIconClassNames
 * @prop {string} iconColor — Color of Icon
 * @prop {string} position - position of the button
 * @prop {(event: object) => void} onClick — Button click handler
 * @prop {string} children
 */

/**
 * Our custom styled Button
 * @param {Props} props
 */
const button = props => (
  <Button
    type={props.type}
    btnType={props.btnType}
    position={props.position}
    disabled={props.disabled}
    onClick={props.onClick}>
    <Icon
      className={props.leftIconClassNames}
      leftIcon
      iconColor={props.iconColor}
    />
    {props.children}
    <Icon
      className={props.rightIconClassNames}
      rightIcon
      iconColor={props.iconColor}
    />
  </Button>
)

button.propTypes = {
  type: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  disabled: PropTypes.bool,
  leftIconClassNames: PropTypes.string,
  rightIconClassNames: PropTypes.string,
  iconColor: PropTypes.string,
  position: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

button.defaultProps = {
  type: 'button',
  btnType: 'primary',
  iconColor: 'black',
}

export default button
