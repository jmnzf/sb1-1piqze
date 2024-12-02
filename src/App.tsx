import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { router } from './routes';
import { ThemeToggle } from './components/theme/ThemeToggle';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            <RouterProvider router={router} />
            <ThemeToggle />
          </div>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;