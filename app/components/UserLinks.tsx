import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function UserLinks() {
  return (
    <div className="flex space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/egmp/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-600 w-12 h-12 hover:text-blue-800" />
      </a>
      <a href="https://github.com/egmp7" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-900 w-12 h-12 hover:text-gray-700" />
      </a>
    </div>
  );
}
