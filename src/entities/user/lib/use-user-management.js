import { useState } from 'react';

export const useUserManagement = usersData => {
  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredUsers = usersData.filter(user =>
    user.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedUsers =
    sortOrder === 'asc'
      ? filteredUsers.sort((a, b) => a.username.localeCompare(b.username))
      : filteredUsers.sort((a, b) => b.username.localeCompare(a.username));

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  const handleSortChange = value => {
    setSortOrder(value);
  };

  return {
    searchValue,
    sortOrder,
    filteredUsers: sortedUsers,
    handleSearchChange,
    handleSortChange,
  };
};
