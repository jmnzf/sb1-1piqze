import axios from 'axios';

// Simulated API delay
const MOCK_API_DELAY = 1000;

// Mock user data
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@mercadoalamano.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'user@mercadoalamano.com',
    password: 'user123',
    name: 'Regular User',
    role: 'user'
  }
];

// Mock API service
export const authApi = {
  login: async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, MOCK_API_DELAY));

    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  validateToken: async (token: string) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_API_DELAY));
    
    try {
      // In a real app, you would validate the token with your backend
      const userData = JSON.parse(token);
      const user = MOCK_USERS.find(u => u.id === userData.id);
      
      if (!user) {
        throw new Error('Invalid token');
      }

      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
};