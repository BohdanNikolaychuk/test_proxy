import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router/config.js';
import { GenericLayout } from '../../pages/layouts/layouts.ui.jsx';
import { MainPage } from '../../pages/main/main-page.ui.jsx';
import React from 'react';
import { DetailsPage } from '../../pages/details/details-page.ui.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
