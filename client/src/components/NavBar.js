import React, {useContext} from 'react';
import {Context} from '../index'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>КупиДевайс</NavLink>
        {user.isAuth
          ? <Nav className="ml-auto">
            <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant='outline-light' className="ms-2" onClick={logout}>Выйти</Button>
          </Nav>
          : <Nav className="ml-auto">
            <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;