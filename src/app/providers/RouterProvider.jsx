import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GenericLayout } from '../../pages/layouts/layouts.ui';
import { MainPage } from '../../pages/main/main-page.ui';
import React from 'react';
import { DetailsPage } from '../../pages/details/details-page.ui';
import { getUsers } from '../../entities/user/api/get-users';
import { getPostsByUserId } from '../../entities/post/api/get-post-byId';
import { getAlbumsByUserId } from '../../entities/albums/api/get-albums-byId';

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

          switch (contentType) {
            case 'posts':
              return getPostsByUserId({ userId });
            case 'albums':
              return getAlbumsByUserId({ userId });
            default:
              return Promise.reject(
                new Error(`Unknown contentType: ${contentType}`)
              );
          }
        },
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
