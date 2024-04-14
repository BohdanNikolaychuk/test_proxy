import React from 'react';
import { Row, Col, Input, Select } from 'antd';
import { UserCard } from '../../entities/user/ui/user-card.ui';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';
import { useUserManagement } from '../../entities/user/lib/use-user-management';

const { Option } = Select;

export const MainPage = () => {
  const users = useLoaderData();
  const {
    searchValue,
    sortOrder,
    filteredUsers,
    handleSearchChange,
    handleSortChange,
  } = useUserManagement(users);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - My webSite</title>
        <meta name="description" content="Home " />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <div style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by username"
          allowClear
          style={{ width: 300, marginRight: 16 }}
          onChange={e => handleSearchChange(e.target.value)}
          value={searchValue}
        />

        <Select
          style={{ width: 120 }}
          onChange={handleSortChange}
          value={sortOrder}
        >
          <Option value="asc">Ascending</Option>
          <Option value="desc">Descending</Option>
        </Select>
      </div>
      <Row gutter={[16, 16]}>
        {filteredUsers.map(user => (
          <Col
            key={user.id}
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
          >
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </>
  );
};
