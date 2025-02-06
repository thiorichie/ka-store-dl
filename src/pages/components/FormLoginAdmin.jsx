import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function FormLoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try{
      const login = await axios.post('https://ka-store-backend-production.up.railway.app/api/login', data, {withCredentials: true})
      console.log(login.data)
      alert('Login successful!');
      navigate('/admin')
    }
    catch (e){
      console.error('Login error:', e.response ? e.response.data : e.message);
      alert(e.response ? e.response.data.message : 'Unknown error');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
          border: '2.5px solid #0d6efd'
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', color: 'white', marginBottom: '5px' }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username wajib diisi' })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            />
            {errors.username && (
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.username.message}</span>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', color: 'white', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password wajib diisi' })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            />
            {errors.password && (
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.password.message}</span>
            )}
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLoginAdmin;