import React, { useEffect, useState } from 'react';
import { Home, Package, Store, ShoppingCart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const NavigationMenu: React.FC = () => {
  const location = useLocation();
  const [productCount, setProductCount] = useState(0);

  const countProductsInCart = () => {
    const cartData = localStorage.getItem('mercado-cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      return Array.isArray(parsedCart) ? parsedCart.length : 0;
    }
    return 0;
  };

  useEffect(() => {
    const count = countProductsInCart();
    setProductCount(count);

    const handleStorageChange = () => {
      const newCount = countProductsInCart();
      setProductCount(newCount);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []); 

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };
  
  return (
    <nav className="navigation-menu">
      <a 
        href="/" 
        className={`nav-item ${isActive('/') ? 'active' : ''}`}
      >
        <Home className="nav-icon w-5 h-5" />
        <span>Inicio</span>
      </a>
      <a 
        href="/catalogo" 
        className={`nav-item ${isActive('/catalogo') ? 'active' : ''}`}
      >
        <Package className="nav-icon w-5 h-5" />
        <span>Catálogo</span>
      </a>
      <a 
        href="/mi-negocio" 
        className={`nav-item ${isActive('/mi-negocio') ? 'active' : ''}`}
      >
        <Store className="nav-icon w-5 h-5" />
        <span>Mi negocio</span>
      </a>
      <a 
        href="/carrito" 
        className={`nav-item ${isActive('/carrito') ? 'active' : ''}`}
      >
        <ShoppingCart className="nav-icon w-5 h-5" />
        <span>Mi carrito</span>
        {productCount > 0 && (
          <span className="cart-badge">{productCount}</span>
        )}
      </a>
    </nav>
  );
};