import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page) => {
    const data = await getUsers(page);
    setUsers(data.data);
    setTotalPages(data.total_pages); // ✅ Corrected totalPages
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <div className="users-container">
      <h2>User List</h2>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Users;

