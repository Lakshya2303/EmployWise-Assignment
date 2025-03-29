import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../services/api';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Are you sure?')) {
      await deleteUser(user.id);
      alert('User deleted successfully!');
      window.location.reload();
    }
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
