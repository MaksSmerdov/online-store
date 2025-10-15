import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';
import { SHOP_ROUTE } from '../utils/consts.js';
import { Context } from '../main.jsx';
import { useContext } from 'react';

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) => ( // eslint-disable-line no-unused-vars
        <Route key={path} path={path} element={<Component/>}/>
      ))}
      {publicRoutes.map(({ path, Component }) => ( // eslint-disable-line no-unused-vars
        <Route key={path} path={path} element={<Component/>}/>
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace/>}/>
    </Routes>
  );
};

export default AppRouter;