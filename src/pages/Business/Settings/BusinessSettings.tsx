import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessSidebar } from '../../../components/business/BusinessSidebar';
import './BusinessSettings.css';

export const BusinessSettings: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Configuración - Mi Negocio</title>
        <meta name="description" content="Configura tu negocio en Mercado a la Mano" />
      </Helmet>

      <div className="business-layout">
        <BusinessSidebar />
        
        <div className="business-container">
          <div className="business-header">
            <h1 className="business-title">Configuración</h1>
          </div>

          <div className="settings-content">
            <div className="settings-grid">
              {/* Settings content will go here */}
              <p>Contenido de configuración próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};