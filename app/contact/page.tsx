'use client';
import messages from './messages';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission (send to API or log it)
    console.log(formData);
    // Optionally clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="dark:bg-slate-700 bg-slate-200 shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-center">{messages.title}</h2>
        <p className="mb-6">{messages.subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">{messages.formName}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">{messages.formEmail}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">{messages.formMessage}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your message"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {messages.formSubmit}
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">{messages.sectionTwoTitle}</h3>
          <p>{messages.sectionTwoEmail}</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 w-6 h-6 hover:text-blue-800" />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-900 w-6 h-6 hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
