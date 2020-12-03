import React from 'react'
import { FormattedMessage } from 'react-intl'

import { HelloMsg, Wrapper } from './style'

const HelloUser = () => {
    return (
        <Wrapper>
            <HelloMsg id='hello_msg'><FormattedMessage id='helloUser'/></HelloMsg>
        </Wrapper>
    )
} 

export default HelloUser