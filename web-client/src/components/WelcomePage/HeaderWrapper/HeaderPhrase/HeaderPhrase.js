import React from 'react'
import { PhraseDiv, PhraseWrapper, PhraseAuthor } from './style'

const HeaderPhrase = () => {
    return (
        <PhraseDiv>
            <PhraseWrapper>
                ”Нет любви более искренней, чем  <br /> любовь к еде!”
            </PhraseWrapper>
            <PhraseAuthor>
                Джордж Бернард Шоу
            </PhraseAuthor>
        </PhraseDiv>
    )
}

export default HeaderPhrase