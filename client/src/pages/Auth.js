import React from 'react';
import {Button, Card, Container, Form, Row} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE

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
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'
          />
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
            {isLogin
              ? <div style={{alignSelf: 'center'}}>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
              : <div style={{alignSelf: 'center'}}>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
            }
            <Button variant='outline-success'>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;