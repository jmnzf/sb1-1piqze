import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../context/AuthContext';
import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';
import './Admin.css';

export const Admin: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Administración - Mercado a la Mano</title>
        <meta name="description" content="Panel de administración de Mercado a la Mano" />
      </Helmet>

      {user ? <AdminDashboard /> : <AdminLogin />}
    </>
  );
};