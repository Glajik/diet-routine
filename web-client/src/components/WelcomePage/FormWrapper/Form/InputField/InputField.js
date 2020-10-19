import React from 'react'
import Field from '../../../../UI/Field'

// You can find the explanation for this code in i18nInfo.txt (4 paragraph)
import {injectIntl} from 'react-intl'

const InputField = (props) => (
  <Field label={props.intl.formatMessage({id: "nameQuestion"})}/>
)

export default injectIntl(InputField)