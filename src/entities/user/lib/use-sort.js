import { useState } from 'react';

const useSort = data => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortData = (field, order) => {
    const sorted = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    });
    setSortedData(sorted);
    setSortOrder(order);
  };

  return { sortedData, sortData, sortOrder };
};

export default useSort;
