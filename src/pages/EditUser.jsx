import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../services/api';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        console.log('API Response:', userData); // Debugging line
        if (userData && userData.data) {
          setFormData(userData.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      alert('User updated successfully!');
      navigate('/users');
    } catch (err) {
      alert('Failed to update user!');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData?.first_name || ''}
        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        value={formData?.last_name || ''}
        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
        placeholder="Last Name"
      />
      <input
        type="email"
        value={formData?.email || ''}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
