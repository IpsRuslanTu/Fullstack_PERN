import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {login, registration} from '../http/userApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }

      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card className='p-5' style={{width: 600}}>
        <h2 className='m-lg-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
            {isLogin
              ? <div style={{alignSelf: 'center'}}>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
              : <div style={{alignSelf: 'center'}}>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
            }
            <Button
              variant='outline-success'
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;