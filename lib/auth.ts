// Enhanced authentication utility for admin access
// In production, you should use proper authentication services like NextAuth.js

import { getConfig } from './config'

export interface AuthState {
  isAuthenticated: boolean
  loginTime: number | null
  sessionId: string | null
}

export interface LoginAttempts {
  count: number
  lastAttempt: number
  lockedUntil: number | null
}

// Generate a unique session ID
const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Get stored authentication state
export const getAuthState = (): AuthState => {
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, loginTime: null, sessionId: null }
  }
  
  try {
    const stored = localStorage.getItem('admin-auth')
    if (stored) {
      const authState: AuthState = JSON.parse(stored)
      
      // Check if session is still valid
      if (isSessionValid(authState.loginTime)) {
        return authState
      } else {
        // Session expired, clear it
        localStorage.removeItem('admin-auth')
        console.log('Session expired, user logged out')
      }
    }
  } catch (error) {
    console.error('Error reading auth state:', error)
    localStorage.removeItem('admin-auth')
  }
  
  return { isAuthenticated: false, loginTime: null, sessionId: null }
}

// Get stored login attempts
export const getLoginAttempts = (): LoginAttempts => {
  if (typeof window === 'undefined') {
    return { count: 0, lastAttempt: 0, lockedUntil: null }
  }
  
  try {
    const stored = localStorage.getItem('admin-login-attempts')
    if (stored) {
      const attempts: LoginAttempts = JSON.parse(stored)
      
      // Check if lockout has expired
      if (attempts.lockedUntil && Date.now() > attempts.lockedUntil) {
        localStorage.removeItem('admin-login-attempts')
        return { count: 0, lastAttempt: 0, lockedUntil: null }
      }
      
      return attempts
    }
  } catch (error) {
    console.error('Error reading login attempts:', error)
    localStorage.removeItem('admin-login-attempts')
  }
  
  return { count: 0, lastAttempt: 0, lockedUntil: null }
}

// Check if the current session is still valid
export const isSessionValid = (loginTime: number | null): boolean => {
  if (!loginTime) return false
  
  const now = Date.now()
  const timeSinceLogin = now - loginTime
  const config = getConfig()
  
  return timeSinceLogin < config.SESSION_TIMEOUT
}

// Check if account is locked due to too many failed attempts
export const isAccountLocked = (): boolean => {
  const attempts = getLoginAttempts()
  return attempts.lockedUntil !== null && Date.now() < attempts.lockedUntil
}

// Record a failed login attempt
export const recordFailedAttempt = (): void => {
  if (typeof window === 'undefined') return
  
  const attempts = getLoginAttempts()
  const config = getConfig()
  
  const newAttempts: LoginAttempts = {
    count: attempts.count + 1,
    lastAttempt: Date.now(),
    lockedUntil: attempts.count + 1 >= config.MAX_LOGIN_ATTEMPTS 
      ? Date.now() + config.LOCKOUT_DURATION 
      : null
  }
  
  try {
    localStorage.setItem('admin-login-attempts', JSON.stringify(newAttempts))
    
    if (newAttempts.lockedUntil) {
      console.warn(`Account locked due to ${newAttempts.count} failed attempts. Locked until ${new Date(newAttempts.lockedUntil).toLocaleString()}`)
    }
  } catch (error) {
    console.error('Error storing login attempts:', error)
  }
}

// Authenticate user with password
export const authenticate = (password: string): boolean => {
  if (isAccountLocked()) {
    console.warn('Account is currently locked due to too many failed attempts')
    return false
  }
  
  const config = getConfig()
  
  if (password === config.DEFAULT_PASSWORD) {
    // Successful login
    const sessionId = generateSessionId()
    const authState: AuthState = {
      isAuthenticated: true,
      loginTime: Date.now(),
      sessionId
    }
    
    try {
      localStorage.setItem('admin-auth', JSON.stringify(authState))
      localStorage.removeItem('admin-login-attempts') // Reset failed attempts
      console.log('Authentication successful')
      return true
    } catch (error) {
      console.error('Error storing auth state:', error)
      return false
    }
  } else {
    // Failed login
    recordFailedAttempt()
    console.warn('Authentication failed')
    return false
  }
}

// Logout user
export const logout = (): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem('admin-auth')
    console.log('User logged out')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}

// Extend session (useful for keeping user logged in during activity)
export const extendSession = (): boolean => {
  const authState = getAuthState()
  
  if (authState.isAuthenticated && authState.loginTime) {
    const newAuthState: AuthState = {
      ...authState,
      loginTime: Date.now()
    }
    
    try {
      localStorage.setItem('admin-auth', JSON.stringify(newAuthState))
      return true
    } catch (error) {
      console.error('Error extending session:', error)
      return false
    }
  }
  
  return false
}

// Get remaining session time in milliseconds
export const getRemainingSessionTime = (): number => {
  const authState = getAuthState()
  
  if (!authState.isAuthenticated || !authState.loginTime) {
    return 0
  }
  
  const config = getConfig()
  const now = Date.now()
  const timeSinceLogin = now - authState.loginTime
  const remaining = config.SESSION_TIMEOUT - timeSinceLogin
  
  return Math.max(0, remaining)
}

// Get lockout remaining time in milliseconds
export const getLockoutRemainingTime = (): number => {
  const attempts = getLoginAttempts()
  
  if (!attempts.lockedUntil) {
    return 0
  }
  
  const now = Date.now()
  const remaining = attempts.lockedUntil - now
  
  return Math.max(0, remaining)
}
