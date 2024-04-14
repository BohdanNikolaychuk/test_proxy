import React from 'react';

import { PostCard } from '../../entities/post/ui/post-card.ui';
import { useLoaderData } from 'react-router';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const DetailsPage = () => {
  const posts = useLoaderData();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details - My webSite</title>
        <meta name="description" content="Details " />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div>
        <Link to="/">Go To Main Page</Link>
        <Row gutter={[16, 16]}>
          {posts.map(post => (
            <Col key={post.id} className="gutter-row" span={6}>
              <PostCard key={post.id} {...post} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
