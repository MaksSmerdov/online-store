import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts.js';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

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
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
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
          >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
        </Form>
      </Card>

    </Container>
  );
};

export default Auth;