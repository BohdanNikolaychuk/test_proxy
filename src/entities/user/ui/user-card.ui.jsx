import React from 'react';
import { Card, Button, Flex } from 'antd';

export const UserCard = ({ id, name, username, email }) => {
  return (
    <Card title={username}>
      <h2> {name}</h2>

      <Flex justify="center" gap="middle">
        <Button>Go To Post</Button>
        <Button>Go To Albums</Button>
      </Flex>
    </Card>
  );
};
