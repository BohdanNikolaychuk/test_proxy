import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router/config.js';
import { GenericLayout } from '../../pages/layouts/layouts.ui.jsx';
import { MainPage } from '../../pages/main/main-page.ui.jsx';
import { PostsPage } from '../../pages/posts/posts-page.ui.jsx';
import React from 'react';
function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <BubbleError />,
    element: <GenericLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
      // {
      //   loader: async () => redirect(pathKeys.page404()),
      //   path: '*',
      // },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
