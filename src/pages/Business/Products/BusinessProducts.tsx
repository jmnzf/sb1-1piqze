import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessSidebar } from '../../../components/business/BusinessSidebar';
import './BusinessProducts.css';

export const BusinessProducts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Productos - Mi Negocio</title>
        <meta name="description" content="Gestiona tus productos en Mercado a la Mano" />
      </Helmet>

      <div className="business-layout">
        <BusinessSidebar />
        
        <div className="business-container">
          <div className="business-header">
            <h1 className="business-title">Productos</h1>
          </div>

          <div className="products-content">
            <div className="products-grid">
              {/* Products content will go here */}
              <p>Contenido de productos próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};