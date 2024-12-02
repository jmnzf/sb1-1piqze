import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../../data/products';
import { ProductCard } from '../../components/products/ProductCard';
import { Filters } from '../../components/filters/Filters/Filters';
import './Catalog.css';

export const Catalog: React.FC = () => {
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
    <>
      <Helmet>
        <title>Catálogo de Productos - Mercado a la Mano</title>
        <meta name="description" content="Explora nuestro catálogo completo de productos frescos y locales" />
      </Helmet>

      <div className="catalog-container">
        <h1 className="catalog-title">Catálogo de Productos</h1>
        
        <div className="catalog-content">
          <aside className="filters-sidebar">
            <div className={`filters-wrapper ${isHeaderCollapsed ? 'header-collapsed' : ''}`}>
              <Filters />
            </div>
          </aside>
          
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};