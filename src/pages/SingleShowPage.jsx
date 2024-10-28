import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleShowPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
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

  if (error) {
    return <div className='text-red-500 text-center mt-4'>{error}</div>;
  }

  if (!user) {
    return <div className='text-center mt-4'>Yuklanmoqda...</div>;
  }

  return (
    <div style={{ height: 'calc(100vh - 80px)' }} className='w-full flex flex-col items-center justify-center bg-gray-100'>
      <h2 className='text-3xl font-bold my-4 text-gray-800'>Foydalanuvchi ma'lumotlari</h2>
      <div className='bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-11/12 max-w-md'>
        <p className='text-lg text-gray-700 mb-2'><strong>ID:</strong> <span className='text-gray-600'>{user.id}</span></p>
        <p className='text-lg text-gray-700 mb-2'><strong>Ism:</strong> <span className='text-gray-600'>{user.name}</span></p>
        <p className='text-lg text-gray-700 mb-2'><strong>Email:</strong> <span className='text-gray-600'>{user.email}</span></p>
        <p className='text-lg text-gray-700 mb-2'><strong>Telefon raqami:</strong> <span className='text-gray-600'>{user.phone}</span></p>
      </div>
    </div>
  );
};

export default SingleShowPage;
