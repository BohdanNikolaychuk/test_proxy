import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router/config.js';
import { GenericLayout } from '../../pages/layouts/layouts.ui.jsx';
import { MainPage } from '../../pages/main/main-page.ui.jsx';
import React from 'react';
import { DetailsPage } from '../../pages/details/details-page.ui.jsx';
import { getUsers } from '../../entities/user/api/get-users.js';
import { getPostsByUserId } from '../../entities/post/api/get-post-byId.js';
import { getAlbumsByUserId } from '../../entities/albums/api/get-albums-byId.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GenericLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        loader: getUsers,
      },
      {
        path: 'details/:userId/:contentType',
        element: <DetailsPage />,
        loader: ({ params }) => {
          const { userId, contentType } = params;
          if (contentType === 'posts') {
            return getPostsByUserId({ userId });
          } else if (contentType === 'albums') {
            return getAlbumsByUserId({ userId });
          }
        },
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
