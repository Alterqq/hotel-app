import React from 'react'
import {Redirect} from 'react-router-dom'
import './LoginForm.scss'

const LoginForm = ({isAuth, handleSubmit, onSubmit,
                     register, errors, errorMessage}) => {
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


export default LoginForm
