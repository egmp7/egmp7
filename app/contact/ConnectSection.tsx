import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import messages from './messages';

export default function ConnectSection() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">{messages.connectSectionTitle}</h3>
      <p>{messages.connectSectionEmail}</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 w-6 h-6 hover:text-blue-800" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-900 w-6 h-6 hover:text-gray-700" />
        </a>
      </div>
    </div>
  );
}
