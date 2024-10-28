import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate()

  useEffect(() => {
    const updateUser = async () => {
      if (name || email || phone) {
        try {
          await axios.put('http://localhost:3000/users/1', {
            name,
            email,
            phone
          });
        } catch (err) {
          console.error('Xatolik:', err);
        }
      }
    };
    
    const timer = setTimeout(() => {
      updateUser();
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [name, email, phone]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Iltimos, barcha maydonlarni to\'ldiring!');
      return;
    }
    setError('');

    try {
      await axios.post('http://localhost:3000/users', { name, email, phone });
      alert('Foydalanuvchi muvaffaqiyatli yaratildi!');
      setName('');
      setEmail('');
      setPhone('');
      nav('/show')
    } catch (err) {
      setError('Xatolik yuz berdi, iltimos qaytadan urinib ko\'ring.');
    }
  };

  return (
    <div style={{ height: 'calc(100vh - 80px)' }}  className='w-full  flex justify-center items-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-center text-xl font-bold mb-4'>
          <AiOutlineUserAdd className='inline-block mr-2' /> Foydalanuvchi yaratish
        </h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Ism'
            className='border p-2 mb-4 rounded'
            required
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='border p-2 mb-4 rounded'
            required
          />
          <input
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Telefon raqami'
            className='border p-2 mb-4 rounded'
            required
          />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
            Yaratish
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
