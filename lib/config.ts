// Configuration file for admin settings
// Use environment variables for all sensitive data

export const ADMIN_CONFIG = {
  // Session timeout in milliseconds (30 minutes)
  SESSION_TIMEOUT: 30 * 60 * 1000,
  
  // Maximum login attempts before temporary lockout
  MAX_LOGIN_ATTEMPTS: 5,
  
  // Lockout duration in milliseconds (15 minutes)
  LOCKOUT_DURATION: 15 * 60 * 1000,
  
  // Rate limiting: max requests per minute
  MAX_REQUESTS_PER_MINUTE: 60
}

// Get configuration with environment variable overrides
export const getConfig = () => {
  const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  const envSessionTimeout = process.env.NEXT_PUBLIC_SESSION_TIMEOUT
  const envMaxAttempts = process.env.NEXT_PUBLIC_MAX_LOGIN_ATTEMPTS
  const envLockoutDuration = process.env.NEXT_PUBLIC_LOCKOUT_DURATION
  
  if (!envPassword) {
    console.warn('NEXT_PUBLIC_ADMIN_PASSWORD not set. Using default password. This is not secure for production.')
  }
  
  return {
    ...ADMIN_CONFIG,
    DEFAULT_PASSWORD: envPassword || 'admin123', // Fallback for development only
    SESSION_TIMEOUT: envSessionTimeout ? parseInt(envSessionTimeout) : ADMIN_CONFIG.SESSION_TIMEOUT,
    MAX_LOGIN_ATTEMPTS: envMaxAttempts ? parseInt(envMaxAttempts) : ADMIN_CONFIG.MAX_LOGIN_ATTEMPTS,
    LOCKOUT_DURATION: envLockoutDuration ? parseInt(envLockoutDuration) : ADMIN_CONFIG.LOCKOUT_DURATION,
  }
}
