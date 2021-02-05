import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {getAuth, getUsers} from '../../redux/selectors'
import {login, setUserProfile} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
import './LoginForm.scss'

const LoginForm = ({users, login, setUserProfile, isAuth}) => {
  const {register, handleSubmit, errors} = useForm()
  const onSubmit = data => {
    users.forEach(user => {
      if (user.email === data.email && user.password === data.password) {
        setUserProfile(user)
        login()
      }
    })
  }

  if (isAuth) {
    return <Redirect to='/'/>
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
            ref={register({
              required: true, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный email"
              }
            })}
            name='email'
            placeholder='Email'/>
        {errors.email
        && errors.email.type === 'required'
        && <p>Поле "Email" обязательно для заполнения</p>}
        {errors.email && <p>{errors.email.message}</p>}
        <input
            ref={register({required: true, minLength: 8})}
            type='password' name='password'
            placeholder='Пароль'/>
        {errors.password
        && errors.password.type === 'required'
        && <p>Поле "Пароль" обязательно для заполнения</p>}
        {errors.password
        && errors.password.type === 'minLength'
        && <p>Минимальная длина пароля 8 символов</p>}
        <button type='submit'>
          <span className='material-icons arrow-forward'>arrow_forward</span>
          Войти
        </button>
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
