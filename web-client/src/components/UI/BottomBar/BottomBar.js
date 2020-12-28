import React, {useState} from 'react'

import {
  BookOutlined,
  CalendarOutlined,
  UserOutlined,
  PlusOutlined
} from '@ant-design/icons'

import {
  BarWrapper,
  IconButton,
  IconsWrapper,
  AddProductButton
} from './style'

const BottomBar = ({currentPage, history}) => {
  const [activeRoute] = useState({
    mainIsActive: history.location.pathname === '/',
    calendarIsActive: history.location.pathname === '/calendar',
    profileIsActive: history.location.pathname === '/profile'
  })

  const clickHandler = (path) => {
    if (history.location.pathname !== path) {
      history.push(path)
    }
  }

  return (
    <BarWrapper>
      <IconsWrapper>
        <IconButton
          isActive={activeRoute.mainIsActive}
          onClick={() => clickHandler('/')}>
          <BookOutlined/>
        </IconButton>
        <IconButton
          isActive={activeRoute.calendarIsActive}
          onClick={() => clickHandler('/calendar')}>
          <CalendarOutlined/>
        </IconButton>
        <IconButton
          isActive={activeRoute.profileIsActive}
          onClick={() => clickHandler('/profile')}>
          <UserOutlined/>
        </IconButton>
        <AddProductButton onClick={() => history.push('/product-search')}>
          <PlusOutlined/>
        </AddProductButton>
      </IconsWrapper>
    </BarWrapper>
  )
}

export default BottomBar