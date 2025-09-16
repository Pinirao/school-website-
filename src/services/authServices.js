// AuthServices.js - Enhanced authentication service module

// Mock user database (in a real app, this would be a database)
const mockUsers = [
  { 
    id: 1, 
    username: 'test', 
    password: '1234', 
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
    joinDate: new Date('2023-01-15'),
    lastLogin: null
  }
];

// Session management
let currentSession = null;

// Simulate API call delay
const simulateAPICall = (data, success = true, delay = 800) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject(new Error('API call failed'));
      }
    }, delay);
  });
};

// Enhanced login function with security features
export const login = async (username, password, rememberMe = false) => {
  try {
    // Input validation
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Find user in mock database
    const user = mockUsers.find(u => u.username === username);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    // Check password (in a real app, compare hashed passwords)
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    
    // Update last login
    user.lastLogin = new Date();
    
    // Create session
    const session = {
      userId: user.id,
      token: generateToken(user.id),
      expires: rememberMe 
        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        : new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
      rememberMe
    };
    
    currentSession = session;
    
    // Remove password from returned user data
    const { password: _, ...userWithoutPassword } = user;
    
    // Simulate API call and return user data without password
    return await simulateAPICall({
      user: userWithoutPassword,
      session,
      message: 'Login successful'
    });
  } catch (error) {
    // Log error (in a real app, send to error tracking service)
    console.error('Login error:', error.message);
    
    // Simulate failed API call
    return await simulateAPICall(
      { error: error.message }, 
      false
    );
  }
};

// Enhanced registration function
export const register = async (userData) => {
  try {
    // Validate required fields
    const { username, password, email, firstName, lastName } = userData;
    
    if (!username || !password || !email || !firstName || !lastName) {
      throw new Error('All fields are required');
    }
    
    // Check if username already exists
    const usernameExists = mockUsers.some(u => u.username === username);
    if (usernameExists) {
      throw new Error('Username already exists');
    }
    
    // Check if email already exists
    const emailExists = mockUsers.some(u => u.email === email);
    if (emailExists) {
      throw new Error('Email already registered');
    }
    
    // Validate password strength (in a real app)
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    
    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      username,
      password, // In a real app, hash the password before storing
      email,
      firstName,
      lastName,
      joinDate: new Date(),
      lastLogin: null
    };
    
    // Add to mock database
    mockUsers.push(newUser);
    
    // Remove password from returned user data
    const { password: _, ...userWithoutPassword } = newUser;
    
    // Simulate API call and return user data without password
    return await simulateAPICall({
      user: userWithoutPassword,
      message: 'Registration successful'
    });
  } catch (error) {
    // Log error
    console.error('Registration error:', error.message);
    
    // Simulate failed API call
    return await simulateAPICall(
      { error: error.message }, 
      false
    );
  }
};

// Enhanced logout function
export const logout = async () => {
  try {
    // Clear session
    currentSession = null;
    
    // Simulate API call
    return await simulateAPICall({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    // Log error
    console.error('Logout error:', error.message);
    
    // Simulate failed API call
    return await simulateAPICall(
      { error: error.message }, 
      false
    );
  }
};

// Additional auth utility functions

// Check if user is authenticated
export const isAuthenticated = () => {
  if (!currentSession) return false;
  
  // Check if session has expired
  if (new Date() > currentSession.expires) {
    currentSession = null;
    return false;
  }
  
  return true;
};

// Get current user
export const getCurrentUser = () => {
  if (!currentSession) return null;
  
  const user = mockUsers.find(u => u.id === currentSession.userId);
  if (!user) return null;
  
  // Remove password from returned user data
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// Get session info
export const getSession = () => {
  return currentSession;
};

// Password reset request (mock)
export const requestPasswordReset = async (email) => {
  try {
    // Check if email exists
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('Email not found');
    }
    
    // In a real app, send password reset email here
    
    // Simulate API call
    return await simulateAPICall({
      success: true,
      message: 'Password reset instructions sent to your email'
    });
  } catch (error) {
    // Log error
    console.error('Password reset error:', error.message);
    
    // Simulate failed API call
    return await simulateAPICall(
      { error: error.message }, 
      false
    );
  }
};

// Update user profile
export const updateProfile = async (userId, updates) => {
  try {
    // Find user
    const userIndex = mockUsers.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    // Apply updates (excluding password and id)
    const { password, id, ...safeUpdates } = updates;
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...safeUpdates };
    
    // Remove password from returned user data
    const { password: _, ...updatedUser } = mockUsers[userIndex];
    
    // Simulate API call
    return await simulateAPICall({
      user: updatedUser,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    // Log error
    console.error('Profile update error:', error.message);
    
    // Simulate failed API call
    return await simulateAPICall(
      { error: error.message }, 
      false
    );
  }
};

// Helper function to generate a mock token (in a real app, use JWT or similar)
const generateToken = (userId) => {
  return `mock-token-${userId}-${Date.now()}`;
};

// Helper function to validate a token (mock)
export const validateToken = (token) => {
  // In a real app, verify JWT signature and expiration
  if (!token || !token.startsWith('mock-token-')) {
    return false;
  }
  
  return true;
};