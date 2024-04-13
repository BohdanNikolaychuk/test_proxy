import React from 'react';
import { Row, Col, Input, Select } from 'antd';
import useSort from '../../entities/user/lib/use-sort.js';
import { UserCard } from '../../entities/user/ui/user-card.ui.jsx';
import { useLoaderData } from 'react-router';

const { Search } = Input;
const { Option } = Select;

export const MainPage = () => {
  const users = useLoaderData();

  return (
    <main>
      <div style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search by username"
          allowClear
          style={{ width: 200, marginRight: 16 }}
        />

        <Select style={{ width: 120 }}>
          <Option value="asc">Ascending</Option>
          <Option value="desc">Descending</Option>
        </Select>
      </div>
      <Row gutter={[16, 16]}>
        {users.map(user => (
          <Col key={user.id} className="gutter-row" span={6}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </main>
  );
};
