import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const scrollThreshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      const shouldCollapse = window.scrollY > scrollThreshold;
      setIsHeaderCollapsed(shouldCollapse);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-layout">
      <Header />
      <main className={`page-content ${isHeaderCollapsed ? 'header-collapsed' : ''}`}>
        <div className="page-content-inner">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};