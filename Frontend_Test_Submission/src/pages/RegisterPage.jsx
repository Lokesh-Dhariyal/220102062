
import React, { useState } from 'react';

export function RegisterPage() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    mobileNo: '',
    githubUsername: '',
    rollNo: '',
    accessCode: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
    alert('Registration submitted!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email (@dit.edu.in)"
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
          type="tel"
          name="mobileNo"
          placeholder="Mobile No"
          value={form.mobileNo}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="githubUsername"
          placeholder="GitHub Username"
          value={form.githubUsername}
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
        <button type="submit" className="py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition-colors">
          Register
        </button>
      </form>
    </div>
  );
}
