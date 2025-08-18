import { useState, useEffect, useCallback } from 'react'
import { 
  getAuthState, 
  logout, 
  extendSession, 
  getRemainingSessionTime,
  isAccountLocked,
  getLockoutRemainingTime
} from '@/lib/auth'

export function useAuth() {
  const [authState, setAuthState] = useState(getAuthState())
  const [remainingTime, setRemainingTime] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [lockoutTime, setLockoutTime] = useState(0)

  const checkAuthStatus = useCallback(() => {
    const newAuthState = getAuthState()
    setAuthState(newAuthState)
    
    if (newAuthState.isAuthenticated) {
      setRemainingTime(getRemainingSessionTime())
    }
  }, [])

  const handleLogout = useCallback(() => {
    logout()
    setAuthState({ isAuthenticated: false, loginTime: null, sessionId: null })
    setRemainingTime(0)
  }, [])

  const handleActivity = useCallback(() => {
    // Extend session on user activity
    if (extendSession()) {
      setRemainingTime(getRemainingSessionTime())
      checkAuthStatus()
    }
  }, [checkAuthStatus])

  const formatTime = useCallback((ms: number): string => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }, [])

  useEffect(() => {
    checkAuthStatus()
    
    // Check auth status every minute
    const authInterval = setInterval(checkAuthStatus, 60000)
    
    return () => {
      clearInterval(authInterval)
    }
  }, [checkAuthStatus])

  useEffect(() => {
    // Update remaining time every second when authenticated
    if (authState.isAuthenticated) {
      const timeInterval = setInterval(() => {
        setRemainingTime(getRemainingSessionTime())
      }, 1000)

      return () => clearInterval(timeInterval)
    }
  }, [authState.isAuthenticated])

  useEffect(() => {
    // Check lockout status every second
    const lockoutInterval = setInterval(() => {
      const locked = isAccountLocked()
      setIsLocked(locked)
      
      if (locked) {
        setLockoutTime(getLockoutRemainingTime())
      }
    }, 1000)

    return () => clearInterval(lockoutInterval)
  }, [])

  return {
    isAuthenticated: authState.isAuthenticated,
    sessionId: authState.sessionId,
    remainingTime,
    isLocked,
    lockoutTime,
    handleLogout,
    handleActivity,
    formatTime,
    checkAuthStatus
  }
}
