import React from 'react'
import { FormattedMessage } from 'react-intl'
import { PhraseDiv, PhraseWrapper, PhraseAuthor } from './style'

const HeaderPhrase = () => {
  return (
    <PhraseDiv>
      <PhraseWrapper>
        <FormattedMessage id="thereIsNoLoveSincererThanTheLoveOfFood" />
      </PhraseWrapper>
      <PhraseAuthor>
        <FormattedMessage id="georgeBernardShaw" />
      </PhraseAuthor>
    </PhraseDiv>
  )
}

export default HeaderPhrase
