import React from 'react'
import Switch from '@material-ui/core/Switch'
import './RegisterForm.scss'
import {Redirect} from 'react-router-dom';

const RegisterForm = ({registrationSuccess, handleSubmit, onSubmit,
                        register, errors, subscribe,
                        switchChange, errorMessage
                      }) => {

  if (registrationSuccess) {
    return <Redirect to='/login' />
  }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name='firstName' type='text' placeholder='Имя'/>
        <p>{errors.firstName?.message}</p>
        <input ref={register} name='lastName' type='text' placeholder='Фамилия'/>
        <p>{errors.lastName?.message}</p>
        <div className='sex'>
          <input defaultChecked ref={register} value='male' type='radio' name='sex' id='male'/>
          <label htmlFor='male'>Мужчина</label>
          <input ref={register} value='female' type='radio' name='sex' id='female'/>
          <label htmlFor='female'>Женщина</label>
        </div>
        <div className='date-birth'>
          <h3>Дата рождения</h3>
          <input name='dateBirth' ref={register} type='text' placeholder='ДД.ММ.ГГГГ'/>
          <p>{errors.dateBirth?.message}</p>
        </div>
        <h3>Данные для входа в сервис</h3>
        <input ref={register} name='email' type="text" placeholder='Email'/>
        <p>{errors.email?.message}</p>
        <input ref={register} name='password' type="password" placeholder='Пароль'/>
        <p>{errors.password?.message}</p>
        <div className='subscribe'>
          <Switch
              type='checkbox'
              checked={subscribe}
              onChange={switchChange}
              name='subscribe' id='subscribe'
              inputRef={register}
              classes={
                {
                  track: 'track',
                  switchBase: 'switchBase',
                  root: 'root',
                  thumb: 'thumb',
                  checked: 'checked'

                }}/>
          <label htmlFor='subscribe'>Получать спецпредложения</label>
        </div>
        <button type='submit' className='button'>Зарегистрироваться</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
  )
}

export default RegisterForm
