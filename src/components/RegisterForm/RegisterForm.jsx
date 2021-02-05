import React, {useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Switch from '@material-ui/core/Switch'
import {useForm} from 'react-hook-form'
import './RegisterForm.scss'
import {connect} from 'react-redux';
import {getUsers} from '../../redux/selectors';
import {registration} from '../../redux/actions';
import {Redirect} from 'react-router-dom';

const RegisterForm = ({users, registration}) => {
  const [subscribe, setSubscribe] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const switchChange = event => setSubscribe(event.target.checked)
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Поле "Имя" обязательно для заполнения')
        .min(3, 'Минимальное количество символов: 3'),
    lastName: Yup.string()
        .required('Поле "Фамилия" обязательно для заполнения')
        .min(3, 'Минимальное количество символов: 3'),
    dateBirth: Yup.string()
        .required('Поле "Дата рождения" обязательно для заполнения')
        .matches(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
            'Введите дату в формате ДД.ММ.ГГГГ'),
    email: Yup.string()
        .required('Поле "Email" обязательно для заполнения')
        .email('Введите корректный email'),
    password: Yup.string()
        .required('Поле "Пароль" обязательно для заполнения')
        .min(8, 'Минимальное количество символов: 8')
  })

  const {register, handleSubmit, errors} = useForm({
    defaultValues: {subscribe: false},
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = data => {
   const canReg = users.every(user => user.email !== data.email)
    if (canReg) {
      registration(data)
      setRegistrationSuccess(true)
    } else {
      setErrorMessage('Данный email уже зарегистрирован')
    }
  }

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
const mapStateToProps = state => {
  return {
    users: getUsers(state)
  }
}
export default connect(mapStateToProps, {registration})(RegisterForm)
