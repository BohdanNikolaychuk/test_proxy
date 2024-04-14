import React from 'react';

import { PostCard } from '../../entities/post/ui/post-card.ui';
import { useLoaderData, useLocation, useParams } from 'react-router';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export const DetailsPage = () => {
  const { contentType } = useParams();
  const posts = useLoaderData();

  const capitalizedText = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details - My webSite</title>
        <meta name="description" content="Details " />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div>
        <Link className="link__button" to="/">
          Back to Main Page
        </Link>
        <h2>{capitalizedText(contentType)}</h2>
        <div style={{ marginTop: '16px' }}>
          <Row gutter={[16, 16]}>
            {posts.map(post => (
              <Col
                key={post.id}
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={6}
              >
                <PostCard key={post.id} {...post} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
