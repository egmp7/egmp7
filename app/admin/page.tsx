'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AdminLogin from '@/components/AdminLogin'
import AuthenticatedAdmin from '@/components/AuthenticatedAdmin'

export default function AdminPage() {
  const { isAuthenticated, checkAuthStatus } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
    setIsLoading(false)
  }, []) // Remove checkAuthStatus from dependencies since it's now stable

  const handleLoginSuccess = () => {
    checkAuthStatus()
  }

  const handleLogout = () => {
    checkAuthStatus()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />
  }

  return <AuthenticatedAdmin onLogout={handleLogout} />
}