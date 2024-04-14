import React from 'react';
import { Card, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, name, username, email }) => {
  return (
    <Card title={`username:${username}`}>
      <h2> Name:{name}</h2>

      <Flex justify="center" gap="middle">
        <Link to={`details/${id}/posts`}>Go to posts</Link>
        <Link to={`details/${id}/albums`}>Go to albums</Link>
      </Flex>
    </Card>
  );
};
