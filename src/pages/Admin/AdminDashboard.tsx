import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShoppingBag, Users, DollarSign } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Panel de Administración</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Bienvenido, {user?.name}
          </p>
        </div>
        <button onClick={logout} className="logout-button">
          Cerrar sesión
        </button>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="card-header">
            <h2 className="card-title">Ventas del día</h2>
            <DollarSign className="text-[--color-text-green] w-6 h-6" />
          </div>
          <p className="card-value">$1,234,567</p>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h2 className="card-title">Pedidos pendientes</h2>
            <ShoppingBag className="text-[--color-text-green] w-6 h-6" />
          </div>
          <p className="card-value">23</p>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h2 className="card-title">Usuarios activos</h2>
            <Users className="text-[--color-text-green] w-6 h-6" />
          </div>
          <p className="card-value">1,234</p>
        </div>
      </div>
    </div>
  );
};