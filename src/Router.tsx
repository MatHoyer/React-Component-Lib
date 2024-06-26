import { Route, Routes } from 'react-router-dom';
import { Component, Home, NotFound } from './Pages';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/component/:name" element={<Component />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
