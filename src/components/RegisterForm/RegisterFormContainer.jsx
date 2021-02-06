import React, {useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux';
import {getUsers} from '../../redux/selectors';
import {registration} from '../../redux/actions';
import RegisterForm from './RegisterForm';

const RegisterFormContainer = ({users, registration}) => {
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
  return (
      <RegisterForm
          registrationSuccess={registrationSuccess}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          subscribe={subscribe}
          switchChange={switchChange}
          errorMessage={errorMessage}
      />
  )
}
const mapStateToProps = state => {
  return {
    users: getUsers(state)
  }
}
export default connect(mapStateToProps, {registration})(RegisterFormContainer)
