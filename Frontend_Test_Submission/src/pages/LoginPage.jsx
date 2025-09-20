
import React, { useState } from 'react';

export function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    rollNo: '',
    accessCode: '',
    clientID: '',
    clientSecret: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login submitted!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={form.rollNo}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="accessCode"
          placeholder="Access Code"
          value={form.accessCode}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="clientID"
          placeholder="Client ID"
          value={form.clientID}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="clientSecret"
          placeholder="Client Secret"
          value={form.clientSecret}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}
