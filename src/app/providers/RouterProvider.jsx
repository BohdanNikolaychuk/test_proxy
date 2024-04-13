import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router/config.js';
import { GenericLayout } from '../../pages/layouts/layouts.ui.jsx';
import { MainPage } from '../../pages/main/main-page.ui.jsx';
import React from 'react';
import { DetailsPage } from '../../pages/details/details-page.ui.jsx';
import { getUsers } from '../../entities/user/api/get-users.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: getUsers,
  },
  {
    path: 'details/:id',
    element: <DetailsPage />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
