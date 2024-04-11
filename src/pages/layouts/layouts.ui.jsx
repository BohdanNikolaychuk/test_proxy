import { Outlet } from 'react-router-dom';
import React from 'react';

export function GenericLayout() {
  return (
    <>
      <h2>HEllo</h2>
      <Outlet />
    </>
  );
}
