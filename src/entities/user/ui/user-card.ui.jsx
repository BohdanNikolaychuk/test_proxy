import React from 'react';
import { Card, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, name, username, email }) => {
  return (
    <Card
      style={{
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
      title={`User: ${username}`}
    >
      <h2>{name}</h2>

      <Flex justify="center" gap="middle">
        <Link className="link__button" to={`details/${id}/posts`}>
          View Posts
        </Link>
        <Link className="link__button" to={`details/${id}/albums`}>
          View Posts
        </Link>
      </Flex>
    </Card>
  );
};
