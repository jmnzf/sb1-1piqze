import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessSidebar } from '../../../components/business/BusinessSidebar';
import './BusinessAnalytics.css';

export const BusinessAnalytics: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Análisis - Mi Negocio</title>
        <meta name="description" content="Analiza el rendimiento de tu negocio en Mercado a la Mano" />
      </Helmet>

      <div className="business-layout">
        <BusinessSidebar />
        
        <div className="business-container">
          <div className="business-header">
            <h1 className="business-title">Análisis</h1>
          </div>

          <div className="analytics-content">
            <div className="analytics-grid">
              {/* Analytics content will go here */}
              <p>Contenido de análisis próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};