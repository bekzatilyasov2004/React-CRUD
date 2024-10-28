import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Foydalanuvchini yuklashda xatolik yuz berdi.');
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, user);
      navigate('/show'); 
    } catch (err) {
      setError('Foydalanuvchini yangilashda xatolik yuz berdi.');
    }
  };

  return (
    <div style={{ height: 'calc(100vh - 80px)' }} className='w-full flex flex-col items-center justify-center bg-gray-100'>
      <h2 className='text-2xl font-bold my-4 text-gray-800'>Foydalanuvchini tahrirlash</h2>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='w-full max-w-md p-4 bg-white rounded-lg shadow-md'>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={handleChange}
          placeholder='Ism'
          className='border border-gray-300 p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Email'
          className='border border-gray-300 p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <input
          type='tel'
          name='phone'
          value={user.phone}
          onChange={handleChange}
          placeholder='Telefon raqami'
          className='border border-gray-300 p-2 mb-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300'>
          Yangilash
        </button>
      </form>
    </div>
  );
};

export default EditPage;
