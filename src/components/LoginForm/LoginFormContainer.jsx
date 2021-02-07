import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {getAuth, getUsers} from '../../redux/selectors'
import {login, setUserProfile} from '../../redux/actions'
import LoginForm from './LoginForm';

const LoginFormContainer = ({users, login, setUserProfile, isAuth}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Поле "Email" обязательно для заполнения')
        .email('Введите корректный email'),
    password: Yup.string()
        .required('Поле "Пароль" обязательно для заполнения')
        .min(8, 'Минимальное количество символов: 8')
  })
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(validationSchema)
  })
  const onSubmit = data => {
    users.forEach(user => {
      if (user.email === data.email && user.password === data.password) {
        setUserProfile(user)
        login()
      } else {
        setErrorMessage('Неверный email или пароль')
      }
    })
  }

  if (isAuth) {
    return <Redirect to='/'/>
  }

  return (
      <LoginForm
          isAuth={isAuth}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          errorMessage={errorMessage}
      />
  )
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    isAuth: getAuth(state)
  }
}

export default connect(mapStateToProps, {login, setUserProfile})(LoginFormContainer)
