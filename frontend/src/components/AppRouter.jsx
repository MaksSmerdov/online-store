import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';
import { SHOP_ROUTE } from '../utils/consts.js';

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => ( // eslint-disable-line no-unused-vars
        <Route key={path} path={path} element={<Component />} />
      ))}
      {publicRoutes.map(({path, Component}) => ( // eslint-disable-line no-unused-vars
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;