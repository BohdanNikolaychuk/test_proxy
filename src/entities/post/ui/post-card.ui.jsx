import { Button, Card, Flex } from 'antd';
import React from 'react';

export const PostCard = ({ title, body }) => {
  return (
    <Card title={title}>
      <p>{body}</p>
    </Card>
  );
};
