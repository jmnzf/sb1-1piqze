import React from 'react';
import { PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import './OrderConfirmation.css';

interface OrderConfirmationProps {
  onBack: () => void;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = () => {
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  const orderNumber = Math.floor(Math.random() * 9000000) + 1000000;

  const handleContinueShopping = () => {
    clearCart();
    navigate('/');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="order-confirmation">
      <PartyPopper className="confirmation-icon" />
      
      <h2 className="confirmation-title">¡Su pago ha sido exitoso!</h2>
      <p className="order-number">Número de la orden: #{orderNumber}</p>

      <div className="confirmation-details">
        <div className="detail-row">
          <span className="detail-label">Producto</span>
          <span className="detail-value">{formatPrice(total)}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Domicilio</span>
          <span className="detail-value">Gratis</span>
        </div>
        <div className="detail-row border-t pt-4">
          <span className="detail-label font-medium">Total</span>
          <span className="detail-value">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="action-buttons">
        <button 
          className="continue-shopping"
          onClick={handleContinueShopping}
        >
          Continuar comprando
        </button>
        <button className="view-order">
          Detalles del pedido
        </button>
      </div>
    </div>
  );
};