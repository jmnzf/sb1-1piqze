import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { NavigationMenu } from './NavigationMenu';
import './Header.css';

export const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollThreshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      const shouldCollapse = window.scrollY > scrollThreshold;
      setIsCollapsed(shouldCollapse);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="header-top">
        <div className="header-left">
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="icon" />
            ) : (
              <Menu className="icon" />
            )}
          </button>
          <Logo />
        </div>

        <div className="header-center">
          <SearchBar />
        </div>

        <div className="header-right">
          <Link to="/login" className="auth-button">
            <span className="auth-text">Iniciar sesión</span>
            <div className="auth-icon">
              <User className="icon" />
            </div>
          </Link>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavigationMenu />
      </div>

      <div className="desktop-menu">
        <NavigationMenu />
      </div>
    </header>
  );
};