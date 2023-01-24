import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from '../components/ui/authorizationbtn';
import { useForm } from "react-hook-form";
import { registrUser } from '../store/reduces/user';
import { useRef, useState } from 'react';
import './enter.css'

function RegForm() {
  const users = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorParagraphText, setErrorParagraphText] = useState('')
  const validateErrorParagraph = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    const {login, password} = data
    let loginSeach = data.login
    const user = users.find(user=>user.login==loginSeach)
    if (user) {
      setErrorParagraphText('Логин занят!!!')
      reset()
      setTimeout(() => setErrorParagraphText(''), 3000)
    } else {
      dispatch(registrUser(data));
      navigate('/auth')
    }
    reset()
  }
  return (
    <div className="login">
      <div className="login__wrapper">

        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <div className="login__link">
            <Link className="login__link" to='/auth' >Авторизоваться</Link>
          </div>

          <h2 className="login__headling">регистрация</h2>


          <input className='login__input' type="text" placeholder='Логин' {...register('login', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Логин должен содержать не менее 4-х символов'
            },
          })} />
          <p className="login__input-error">{errors?.login?.message || ''}</p>


          <input className='login__input' type="password" placeholder='Пароль' {...register('password', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Пароль должен содержать не менее 4-х символов'
            },
          })} />
          <p className="login__input-error">{errors?.password?.message || ''}</p>


          <div className="login__checkbox">
            <label className='login__checkbox-label' htmlFor="checkbox-input">
              <input className='login__checkbox-input' type="checkbox" id="checkbox-input" />
            </label>
            <p className='login__checkbox-text'>Я согласен получать обновления на почту</p>
          </div>
          <p className='login__validate-error' ref={validateErrorParagraph}>{errorParagraphText}</p>
          <AuthButton type="enter" name={"Зарегистрироваться"} OnClick={(event) => event.preventDefault(onSubmit())} />
        </form>

      </div>
    </div>
  );
}

export default RegForm