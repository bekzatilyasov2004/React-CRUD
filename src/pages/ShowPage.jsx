import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ShowPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (err) {
        setError('Foydalanuvchilarni yuklashda xatolik yuz berdi.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError('Foydalanuvchini o\'chirishda xatolik yuz berdi.');
    }
  };

  if (loading) {
    return <div className='text-center'>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className='text-red-500'>{error}</div>;
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='text-2xl font-bold my-4'>Foydalanuvchilar</h2>
      <div className='overflow-x-auto w-full p-5'>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 p-2'>ID</th>
              <th className='border border-gray-300 p-2'>Ism</th>
              <th className='border border-gray-300 p-2'>Email</th>
              <th className='border border-gray-300 p-2'>Telefon raqami</th>
              <th className='border border-gray-300 p-2'>Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className='border border-gray-300'>
                <td className='border border-gray-300 p-2'>{user.id}</td>
                <td className='border border-gray-300 p-2'>{user.name}</td>
                <td className='border border-gray-300 p-2'>{user.email}</td>
                <td className='border border-gray-300 p-2'>{user.phone}</td>
                <td className='border border-gray-300 p-2 flex space-x-2'>
                  <Link to={`/edit/${user.id}`} className='text-blue-500 hover:underline'>
                    <AiOutlineEdit title='Tahrirlash' className='inline-block' />
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className='text-red-500'>
                    <AiOutlineDelete title='Ochirish' className='inline-block' />
                  </button>
                  <Link to={`/show/${user.id}`} className='text-green-500 hover:underline'>
                    <AiOutlineEye title='Korish' className='inline-block' />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowPage;
