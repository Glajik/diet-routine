import React from 'react'
import {colors} from '../../../assets/colors'

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
  ActiveDot,
  AddProductButton
} from './style'

const BottomBar = ({currentPage, history}) => {
  const moveToProductSearch = () => {
    if (history.location.pathname !== '/product-search') {
      history.push('/product-search')
    }
  }

  const moveToCalendar = () => {
    if (history.location.pathname !== '/calendar') {
      history.push('/calendar')
    }
  }

  const moveToProfile = () => {
    if (history.location.pathname !== '/profile') {
      history.push('/profile')
    }
  }

  return (
    <BarWrapper>
      <IconsWrapper>
        <IconButton onClick={moveToProductSearch}>
          <BookOutlined
            style={{
              color: currentPage === 'productSearch' ?  colors.green : '#bfbfbf'
            }}/>
          {currentPage === 'productSearch' ? <ActiveDot/> : null}
        </IconButton>
        <IconButton onClick={moveToCalendar}>
          <CalendarOutlined
            style={{
              color: currentPage === 'calendar' ?  colors.green : '#bfbfbf'
            }}/>
          {currentPage === 'calendar' ? <ActiveDot/> : null}
        </IconButton>
        <IconButton onClick={moveToProfile}>
          <UserOutlined
            style={{
              color: currentPage === 'profile' ?  colors.green : '#bfbfbf'
            }}/>
          {currentPage === 'profile' ? <ActiveDot/> : null}
        </IconButton>
        <AddProductButton onClick={() => history.push('/add-product')}>
          <PlusOutlined style={{color: '#ffffff', fontSize: 15}}/>
        </AddProductButton>
      </IconsWrapper>
    </BarWrapper>
  )
}

export default BottomBar