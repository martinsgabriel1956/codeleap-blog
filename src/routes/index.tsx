import { createBrowserRouter } from 'react-router';
import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { PrivateRoutes } from './private';

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])