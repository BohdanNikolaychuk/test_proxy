import { useState, useMemo } from 'react';

export const useUserManagement = usersData => {
  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredUsers = useMemo(
    () =>
      usersData.filter(user =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [usersData, searchValue]
  );

  const sortedUsers = useMemo(() => {
    const comparator =
      sortOrder === 'asc'
        ? (a, b) => a.username.localeCompare(b.username)
        : (a, b) => b.username.localeCompare(a.username);
    return [...filteredUsers].sort(comparator);
  }, [filteredUsers, sortOrder]);

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
