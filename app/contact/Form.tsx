import React, { useState, ChangeEvent, FormEvent } from 'react';
import messages from './messages';
import Loading from '../components/Loading';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const inputClassName = "w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-500";
const labelClassName = "block font-semibold mb-2";

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // Success state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state
    setIsSuccess(false); // Reset success state on new submission

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true); // Set success state
        setFormData({ name: '', email: '', message: '' }); // Reset form data
      } else {
        alert('Failed to send your message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center"> {/* Center loading animation */}
        <Loading />
      </div>
    ); // Loading animation placeholder
  }

  if (isSuccess) {
    return ( // Conditional rendering for success message
      <div className="text-center">
        <h2 className="text-lg font-semibold">{messages.successfulTitle}</h2>
        <p>{messages.successfulMessage}</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-4xl font-bold mb-2">{messages.title}</h2>
      <p className='text-lg mb-4'>{messages.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={labelClassName}>{messages.formName}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className={labelClassName}>{messages.formEmail}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClassName}
            placeholder="Your email"
          />
        </div>

        <div>
          <label className={labelClassName}>{messages.formMessage}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={inputClassName}
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
    </>
  );
}
