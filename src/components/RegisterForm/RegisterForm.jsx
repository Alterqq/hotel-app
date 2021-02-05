import React, {useState} from 'react'
import './RegisterForm.scss'
import Switch from '@material-ui/core/Switch'
import {useForm} from 'react-hook-form'

const RegisterForm = () => {
  const {register, handleSubmit} = useForm({defaultValues: {subscribe: false}})
  const [subscribe, setSubscribe] = useState(false)
  const handleChange = event => {
    setSubscribe(event.target.checked)
  }

  const onSubmit = data => console.log(data)
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name='firstName' type='text' placeholder='Имя'/>
        <input ref={register} name='lastName' type='text' placeholder='Фамилия'/>

        <div className='sex'>
          <input ref={register} value='male' type='radio' name='sex' id='male'/>
          <label htmlFor='male'>Мужчина</label>
          <input ref={register} value='female' type='radio' name='sex' id='female'/>
          <label htmlFor='female'>Женщина</label>
        </div>
        <div className='date-birth'>
          <h3>Дата рождения</h3>
          <input name='dateBirth' ref={register} type='text' placeholder='ДД.ММ.ГГГГ'/>
        </div>
        <h3>Данные для входа в сервис</h3>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Пароль'/>
        <div className='subscribe'>
          <Switch
              type='checkbox'
              checked={subscribe}
              onChange={handleChange}
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
      </form>
  )
}

export default RegisterForm
