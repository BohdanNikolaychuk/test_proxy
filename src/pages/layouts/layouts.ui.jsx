import { Outlet } from 'react-router-dom';
import React from 'react';

export function GenericLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
