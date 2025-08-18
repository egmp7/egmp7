# Admin Authentication System

This project now includes a secure admin authentication system for protecting the blog administration interface.

## Features

- **Password-based authentication** with configurable security settings
- **Session management** with automatic timeout (default: 30 minutes)
- **Brute force protection** with account lockout after failed attempts
- **Session extension** on user activity
- **Secure storage** using localStorage with session validation
- **Real-time session status** display with countdown timer

## Setup

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# REQUIRED: Set a strong password for admin access
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here

# OPTIONAL: Override default security settings
# Session timeout in milliseconds (default: 30 minutes)
# NEXT_PUBLIC_SESSION_TIMEOUT=1800000

# Maximum login attempts before lockout (default: 5)
# NEXT_PUBLIC_MAX_LOGIN_ATTEMPTS=5

# Lockout duration in milliseconds (default: 15 minutes)
# NEXT_PUBLIC_LOCKOUT_DURATION=900000
```

### 2. Default Password

If no environment variable is set, the system will use the default password `admin123`. **This is not secure for production use.**

## Security Features

### Session Management
- Sessions automatically expire after the configured timeout
- Sessions can be extended through user activity (mouse movement, keyboard input)
- Automatic logout when session expires

### Brute Force Protection
- Account is locked after 5 failed login attempts (configurable)
- Lockout duration: 15 minutes (configurable)
- Failed attempt counter resets after successful login

### Data Storage
- Authentication state stored in localStorage
- Session IDs are generated with high entropy
- All sensitive data is validated and sanitized

## Usage

### Accessing Admin Panel

1. Navigate to `/admin` in your application
2. Enter the admin password
3. Once authenticated, you'll see the blog administration interface
4. Your session will remain active for the configured timeout period

### Session Status

The admin interface displays:
- Current session status
- Remaining session time
- Logout button
- Real-time countdown timer

### Logout

- Click the "Logout" button in the session status bar
- Sessions also automatically expire after timeout
- Failed authentication attempts can trigger account lockout

## Components

### `AdminLogin`
- Handles the login form and authentication
- Shows lockout status and remaining attempts
- Provides user feedback for failed attempts

### `AuthenticatedAdmin`
- Wraps the admin content when authenticated
- Displays session status and logout button
- Handles session extension on user activity

### `useAuth` Hook
- Manages authentication state throughout the app
- Provides authentication utilities and status
- Handles session timing and lockout management

## Configuration

### Default Settings
- **Session Timeout**: 30 minutes
- **Max Login Attempts**: 5
- **Lockout Duration**: 15 minutes
- **Rate Limiting**: 60 requests per minute

### Customization
All settings can be customized through environment variables. See the `.env.example` file for available options.

## Security Considerations

### Production Use
- **Always** set a strong `NEXT_PUBLIC_ADMIN_PASSWORD`
- Consider implementing proper authentication services (NextAuth.js, Auth0, etc.)
- Use HTTPS in production
- Regularly rotate admin passwords

### Development
- Default password `admin123` is provided for development
- Console warnings will appear if no password is set
- All security features are active even in development

## File Structure

```
lib/
├── auth.ts          # Authentication utilities
└── config.ts        # Configuration management

components/
├── AdminLogin.tsx           # Login form component
├── AuthenticatedAdmin.tsx   # Authenticated admin wrapper
└── BlogAdmin.tsx            # Main admin interface

hooks/
└── useAuth.ts       # Authentication state hook

app/admin/
└── page.tsx         # Admin page with auth logic
```

## Troubleshooting

### Common Issues

1. **"Account is locked" message**
   - Wait for the lockout period to expire
   - Check if you've exceeded the maximum login attempts

2. **Session expires quickly**
   - Verify your `NEXT_PUBLIC_SESSION_TIMEOUT` setting
   - Ensure user activity is detected (mouse/keyboard input)

3. **Authentication not working**
   - Check your `.env.local` file exists and has the correct password
   - Verify environment variables are properly loaded
   - Check browser console for any errors

### Debug Mode

Enable debug logging by checking the browser console for authentication-related messages.

## Future Enhancements

- Multi-factor authentication (MFA)
- Role-based access control
- Audit logging
- Integration with external identity providers
- API rate limiting
- Session persistence across browser tabs
