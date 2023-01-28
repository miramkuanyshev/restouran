import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthButton from '../components/ui/authorizationbtn';
import { useForm } from "react-hook-form";
import './enter.css'
import {Auth} from '../store/reduces/user'

function LoginForm() {

  const users = useSelector((state) => state.user.user)
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [errorParagraphText, setErrorParagraphText] = useState('')
  const validateErrorParagraph = useRef();
  const inputStyle = { border: '1px solid red;' }


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    const {login, password} = data
    let loginSeach = data.login
    let passwordInput = data.password
    const user = users.find(user=>user.login==loginSeach)
    if (user) {
      let pasword = users.find(user=>user.login==loginSeach).password
      if (passwordInput === pasword){
        dispach(Auth())
        navigate('/products')
      } else {
        setErrorParagraphText('Логин или пароль неверен')
        reset()
        setTimeout(() => setErrorParagraphText(''), 3000)
      }
      
    } else {
      setErrorParagraphText('Логин или пароль неверен')
      reset()
      setTimeout(() => setErrorParagraphText(''), 3000)
    }





    
  }

  return (
    <div className="login">
      <div className="login__wrapper">

        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <div className="login__link">
            <Link className="login__link" to='/' >Зарегистрироваться</Link>
        </div>
          
          <h2 className="login__headling">вход</h2>


          <input className='login__input' style={inputStyle} type="text" placeholder='Логин'{...register('login', {
            required: 'Поле не должно быть пустым',
            minLength: {
            value: 4,
            message: 'Логин должен содержать не менее 4-х символов'
            
            },
          })}
          />
          <p className="login__input-error">{errors?.login?.message || ''}</p>


          <input className='login__input' type="password" placeholder='Пароль' {...register('password', {
            required: 'Поле не должно быть пустым',
            minLength: {
            value: 4,
            message: 'Пароль должен содержать не менее 4-х символов'
            },
          })}/>
          <p className="login__input-error">{errors?.password?.message || ''}</p>


          <div className="login__checkbox">
            <label className='login__checkbox-label' htmlFor="checkbox-input">
                <input className='login__checkbox-input' type="checkbox" id="checkbox-input"/>
            </label>
            <p className='login__checkbox-text'>Я согласен получать обновления на почту</p>
          </div>
          <p className='login__validate-error'ref={validateErrorParagraph}>{errorParagraphText}</p>
          <AuthButton type="enter" name={"Войти"} OnClick={(event) => event.preventDefault(onSubmit())} />
        </form>

      </div>
    </div>
  );
}

export default LoginForm