'use client'

import { useState, useEffect } from 'react'
import { authenticate, isAccountLocked, getLockoutRemainingTime, getLoginAttempts } from '@/lib/auth'

interface AdminLoginProps {
  onLoginSuccess: () => void
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isLocked, setIsLocked] = useState(false)
  const [lockoutTime, setLockoutTime] = useState(0)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    checkLockoutStatus()
    const interval = setInterval(checkLockoutStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  const checkLockoutStatus = () => {
    const locked = isAccountLocked()
    setIsLocked(locked)
    
    if (locked) {
      setLockoutTime(getLockoutRemainingTime())
    }
    
    const loginAttempts = getLoginAttempts()
    setAttempts(loginAttempts.count)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!password.trim()) {
      setError('Please enter a password')
      return
    }

    setIsLoading(true)
    setError('')

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))

    const success = authenticate(password)
    
    if (success) {
      onLoginSuccess()
    } else {
      if (isAccountLocked()) {
        setError('Account is locked due to too many failed attempts')
        checkLockoutStatus()
      } else {
        setError('Invalid password')
        checkLockoutStatus()
      }
    }

    setIsLoading(false)
    setPassword('')
  }

  const formatTime = (ms: number): string => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-900/20 p-8 border border-gray-200 dark:border-slate-700">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
              <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-2">Account Locked</h2>
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              Too many failed login attempts. Please try again later.
            </p>
            <div className="bg-gray-100 dark:bg-slate-700 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">Time remaining:</p>
              <p className="text-2xl font-mono text-gray-900 dark:text-slate-100">{formatTime(lockoutTime)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-900/20 p-8 border border-gray-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">Admin Access</h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400"
              placeholder="Enter admin password"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {attempts > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Failed attempts: {attempts}/5
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:ring-offset-slate-800"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-slate-500">
            Secure admin access for blog management
          </p>
        </div>
      </div>
    </div>
  )
}
