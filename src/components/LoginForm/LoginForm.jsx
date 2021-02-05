import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {getAuth, getUsers} from '../../redux/selectors'
import {login, setUserProfile} from '../../redux/actions'
import './LoginForm.scss'

const LoginForm = ({users, login, setUserProfile, isAuth}) => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
            ref={register}
            name='email'
            placeholder='Email'/>
        <p>{errors.email?.message}</p>
        <input
            ref={register({required: true, minLength: 8})}
            type='password' name='password'
            placeholder='Пароль'/>
        <p>{errors.password?.message}</p>
        <button type='submit'>
          <span className='material-icons arrow-forward'>arrow_forward</span>
          Войти
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
  )
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    isAuth: getAuth(state)
  }
}

export default connect(mapStateToProps, {login, setUserProfile})(LoginForm)
