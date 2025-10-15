import { useContext } from 'react';
import { Context } from '../main.jsx';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts.js';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar className="bg-black">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
        {user?.isAuth ?
          <Nav style={{ color: 'white', gap: '5px' }}>
            <Button variant={'outline-light'}>Админ панель</Button>
            <Button variant={'outline-light'}>Выйти</Button>
          </Nav>
          :
          <Nav style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;
