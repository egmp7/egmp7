'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import messages from './messages';
import Loading from '@/components/Loading';
import UserLinks from '@/components/UserLinks';

interface FormData {
  name: string;
  email: string;
  message: string;
}


export default function Contact() {

  return (
    <div className="dark:bg-slate-700 bg-slate-200 self-center shadow-md rounded-lg my-4 py-8 px-4 max-w-md">
      <ContactForm />
      <ConnectSection />
    </div>
  );
}


function ConnectSection() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">{messages.connectSectionTitle}</h3>
      <p>{messages.connectSectionEmail}</p>
      <UserLinks />
    </div>
  );
}



function ContactForm() {
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
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required.');
      return;
    }
  
    setIsLoading(true); // Set loading state
    setIsSuccess(false); // Reset success state
  
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
  
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal, // Add signal for aborting the request
      });
  
      clearTimeout(timeoutId); // Clear timeout if request finishes
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Server error:', errorDetails);
        alert(`Failed to send message: ${errorDetails.message || 'Please try again.'}`);
        return;
      }
  
      setIsSuccess(true); // Set success state
      setFormData({ name: '', email: '', message: '' }); // Reset form data
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          alert('Request timed out. Please try again.');
        } else {
          console.error('Error occurred:', error);
          alert('An error occurred while sending your message. Please try again later.');
        }
      } else {
        console.error('Unknown error:', error);
        alert('An unknown error occurred.');
      }
    }    
  };
  

  // render loading animation
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  // render successful form sent
  if (isSuccess) {
    return (
      <>
        <h2 className="text-lg font-semibold">{messages.successfulTitle}</h2>
        <p>{messages.successfulMessage}</p>
      </>
    );
  }

  // render form
  return (
    <>
      <h2 className="text-4xl font-bold mb-2">{messages.title}</h2>
      <p className='text-lg mb-4'>{messages.subtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={styles.labelClassName}>{messages.formName}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className={styles.labelClassName}>{messages.formEmail}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputClassName}
            placeholder="Your email"
          />
        </div>

        <div>
          <label className={styles.labelClassName}>{messages.formMessage}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.inputClassName}
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

const styles = {
  inputClassName: "w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-500",
  labelClassName: "block font-semibold mb-2",
}

