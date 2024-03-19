"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '@/store/auth';

function Logout() {
  const data = useSelector(state => state.auth.value)
  const handleLogout = () => {
    console.log(data); // Kullanıcı bilgisini consola yazdır
    // Logout işlemi için gereken kodları buraya ekleyin
  };

  return (
    <div>
      <button onClick={handleLogout} className="ml-4">
        Logout
      </button>
    </div>
  );
}

export default Logout;