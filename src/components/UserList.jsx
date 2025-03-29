import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={() => onEdit(user.id)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;

