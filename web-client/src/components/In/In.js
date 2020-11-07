import React from 'react'
import { ButtonDiv } from '../RegistrationPage/FormWrapper/Form/ButtonEnter/style'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'
import Loader from '../UI/Loader/index'

const In = () => {
  const dispatch = useDispatch()
  const uid = useSelector(state => state.firebase.auth.uid)
  const isLoaded = useSelector(state => state.firebase.auth.isLoaded)

  if (!isLoaded) return <Loader />

  if (!uid) return <Redirect to="/login" />
  return (
    <div>
      <ButtonDiv btnType="primary" onClick={() => dispatch(signOut())}>
        Out !!!
      </ButtonDiv>
    </div>
  )
}

export default In
