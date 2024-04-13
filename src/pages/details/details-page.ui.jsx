import React from 'react'

import { PostCard } from '../../entities/post/ui/post-card.ui.jsx'
import { useLoaderData } from 'react-router'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export const DetailsPage = () => {
  const posts = useLoaderData()
  return (
    <div>
      <Link to='/'>Go To Main Page</Link>
      <Row gutter={[16, 16]}>
        {posts.map(post => (
          <Col key={post.id} className='gutter-row' span={6}>
            <PostCard key={post.id} {...post} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
