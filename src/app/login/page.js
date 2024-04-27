
import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">Username</label>
          <input type="text" id="username" className="form-input mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Password</label>
          <input type="password" id="password" className="form-input mt-1" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
