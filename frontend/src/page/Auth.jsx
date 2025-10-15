import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { login, registration } from '../http/userApi.js';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main.jsx';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.message);
    }

  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: '600px' }} className="p-5">
        <h2 className="m-lg-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={'password'}
          />
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ?
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>
                  Зарегистрируйся!
                </NavLink>
              </div>
              :
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}>
                  Зарегистрируйся!
                </NavLink>
              </div>
            }

          </Row>
          <Button
            className="mt-3"
            variant={'outline-success'}
            onClick={click}
          >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
        </Form>
      </Card>

    </Container>
  );
});

export default Auth;