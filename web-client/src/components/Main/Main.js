import React from 'react'
import {Container} from '../UI'
import {TopBottomBarsLayout} from '../../layouts'
import {MainContentWrapper} from './style'

const Main = (props) => {
  return (
    <Container>
      <TopBottomBarsLayout
        title="main"
        settingsAction={() => console.log('Main Page')}
        history={props.history}>
        <MainContentWrapper>
          <h2>Main Page</h2>
        </MainContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default Main