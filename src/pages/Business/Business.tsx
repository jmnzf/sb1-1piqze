import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../context/AuthContext';
import { BarChart, Users, Package, DollarSign } from 'lucide-react';
import { BusinessSidebar } from '../../components/business/BusinessSidebar';
import './Business.css';

export const Business: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Helmet>
        <title>Mi Negocio - Mercado a la Mano</title>
        <meta name="description" content="Gestiona tu negocio en Mercado a la Mano" />
      </Helmet>

      <div className="business-layout">
        <BusinessSidebar />
        
        <div className="business-container">
          <div className="business-header">
            <div>
              <h1 className="business-title">Mi Negocio</h1>
              <p className="business-subtitle">
                Bienvenido, {user?.name}
              </p>
            </div>
            <button onClick={logout} className="logout-button">
              Cerrar sesión
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Ventas del Mes</h3>
                <DollarSign className="stat-icon" />
              </div>
              <p className="stat-value">$1,234,567</p>
              <p className="stat-change positive">+12.5% vs mes anterior</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Pedidos Pendientes</h3>
                <Package className="stat-icon" />
              </div>
              <p className="stat-value">12</p>
              <p className="stat-change">4 necesitan atención</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Productos Activos</h3>
                <BarChart className="stat-icon" />
              </div>
              <p className="stat-value">45</p>
              <p className="stat-change">3 con bajo stock</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Clientes Nuevos</h3>
                <Users className="stat-icon" />
              </div>
              <p className="stat-value">28</p>
              <p className="stat-change positive">+8% este mes</p>
            </div>
          </div>

          <div className="business-content">
            <div className="recent-orders">
              <h2>Pedidos Recientes</h2>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>ID Pedido</th>
                      <th>Cliente</th>
                      <th>Productos</th>
                      <th>Total</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>Juan Pérez</td>
                      <td>3 items</td>
                      <td>$125,000</td>
                      <td><span className="status pending">Pendiente</span></td>
                    </tr>
                    <tr>
                      <td>#12344</td>
                      <td>María López</td>
                      <td>2 items</td>
                      <td>$85,000</td>
                      <td><span className="status completed">Completado</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};