// Login.jsx
import React, { useState } from 'react';
//import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
      onClose();
    } catch (error) {
      console.error('Error during email/password sign-in:', error);
      alert(error.message.replace('Firebase: ', ''));
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(getAuth(), new GoogleAuthProvider());
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert(error.message.replace('Firebase: ', ''));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white backdrop-blur-lg rounded-[20px] shadow-lg p-6 max-w-sm w-full border border-gray-300">
        <div className="flex justify-end items-right mb-4">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">&times;</button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-bold">Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              placeholder="example@gmail.com"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              style={{
                width: 'calc(100% - 0.5rem)',
                backgroundColor: '#d5dbdb30',
                borderBottom: '1px solid rgba(193, 199, 205, 1)'
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              placeholder="Enter your password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                width: 'calc(100% - 0.5rem)',
                backgroundColor: '#d5dbdb30',
                borderBottom: '1px solid rgba(193, 199, 205, 1)'
              }}
            />
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full mb-3"
            >
              Login
            </button>
            <Link className="text-blue-500" onClick={() => handlePasswordReset(email)}>Forgot password?</Link>
          </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-600">OR</span>
        </div>
        <button
          onClick={handleGoogle}
          className="bg-gray-100 border border-blue-500 text-white font-small py-2 px-4 rounded-lg flex items-center justify-center w-full mb-3 text-base"
          style={{ backgroundColor: 'rgba(242, 244, 248, 1)', borderColor: 'rgba(15, 98, 254, 1)', color: 'rgba(15, 98, 254, 1)' }}
        >
          <FaGoogle className="mr-2" /> Sign up with Google
        </button>
        <div className="flex justify-center items-center">
          <span className="text-blue-500">Don't have an account? <Link to="#" onClick={SignUpPopup} className="text-blue-500">Sign up</Link></span>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
