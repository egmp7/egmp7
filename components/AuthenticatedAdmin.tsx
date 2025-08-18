'use client'

import { useAuth } from '@/hooks/useAuth'
import BlogAdmin from './BlogAdmin'

interface AuthenticatedAdminProps {
  onLogout: () => void
}

export default function AuthenticatedAdmin({ onLogout }: AuthenticatedAdminProps) {
  const { 
    isAuthenticated, 
    remainingTime, 
    handleLogout, 
    handleActivity, 
    formatTime 
  } = useAuth()

  const handleLogoutClick = () => {
    handleLogout()
    onLogout()
  }

  if (!isAuthenticated) {
    return null // This will be handled by the parent component
  }

  return (
    <div className="min-h-screen bg-gray-50" onMouseMove={handleActivity} onKeyDown={handleActivity}>
      {/* Session Status Bar */}
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-medium">Admin Session Active</span>
          <span className="text-sm opacity-90">
            Time remaining: {formatTime(remainingTime)}
          </span>
        </div>
        <button
          onClick={handleLogoutClick}
          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm font-medium transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Admin Content */}
      <BlogAdmin />
    </div>
  )
}
