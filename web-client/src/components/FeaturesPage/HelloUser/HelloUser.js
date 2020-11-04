import React from 'react'
import { HelloMsg, Wrapper } from './style'
import { FormattedMessage } from 'react-intl'

const HelloUser = () => {
    return (
        <Wrapper>
            <HelloMsg id='hello_msg'><FormattedMessage id='helloUser'/></HelloMsg>
        </Wrapper>
    )
} 

export default HelloUser