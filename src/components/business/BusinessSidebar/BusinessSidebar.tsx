import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Home,
  Package,
  ShoppingBag,
  BarChart,
  Settings
} from 'lucide-react';
import './BusinessSidebar.css';

export const BusinessSidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === `/mi-negocio${path}`;
  };

  return (
    <aside className="business-sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Pagina principal</h2>
        </div>

        <nav className="sidebar-section">
          <a 
            href="/mi-negocio" 
            className={`sidebar-link ${isActive('') ? 'active' : ''}`}
          >
            <Home className="sidebar-icon" />
            <span className="sidebar-text">Dashboard</span>
          </a>

          <a 
            href="/mi-negocio/productos" 
            className={`sidebar-link ${isActive('/productos') ? 'active' : ''}`}
          >
            <Package className="sidebar-icon" />
            <span className="sidebar-text">Productos</span>
          </a>

          <a 
            href="/mi-negocio/pedidos" 
            className={`sidebar-link ${isActive('/pedidos') ? 'active' : ''}`}
          >
            <ShoppingBag className="sidebar-icon" />
            <span className="sidebar-text">Pedidos</span>
          </a>

          <a 
            href="/mi-negocio/analisis" 
            className={`sidebar-link ${isActive('/analisis') ? 'active' : ''}`}
          >
            <BarChart className="sidebar-icon" />
            <span className="sidebar-text">Análisis</span>
          </a>

          <a 
            href="/mi-negocio/configuracion" 
            className={`sidebar-link ${isActive('/configuracion') ? 'active' : ''}`}
          >
            <Settings className="sidebar-icon" />
            <span className="sidebar-text">Configuración</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};