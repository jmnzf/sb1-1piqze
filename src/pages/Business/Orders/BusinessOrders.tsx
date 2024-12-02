import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BusinessSidebar } from '../../../components/business/BusinessSidebar';
import './BusinessOrders.css';

export const BusinessOrders: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pedidos - Mi Negocio</title>
        <meta name="description" content="Gestiona tus pedidos en Mercado a la Mano" />
      </Helmet>

      <div className="business-layout">
        <BusinessSidebar />
        
        <div className="business-container">
          <div className="business-header">
            <h1 className="business-title">Pedidos</h1>
          </div>

          <div className="orders-content">
            <div className="orders-list">
              {/* Orders content will go here */}
              <p>Contenido de pedidos próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};