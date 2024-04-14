import { Card } from 'antd';
import React from 'react';
import './post-card.css';
export const PostCard = ({ title, body }) => {
  return (
    <Card
      style={{
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
      title={title}
    >
      {body && <p className="card__desc">{body}</p>}
    </Card>
  );
};
