import React from 'react'
import { PhraseDiv, PhraseWrapper, PhraseAuthor } from './style'
import { FormattedMessage } from 'react-intl'
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
