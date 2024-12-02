import React from 'react';
import { useCart } from '../../../context/CartContext';
import './CartSummary.css';

export const CartSummary: React.FC = () => {
  const { items, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="order-summary">
      <h2 className="summary-title">Resumen del pedido</h2>
      
      <div className="summary-items">
        {items.map(item => (
          <div key={item.product.id} className="summary-item">
            <span className="summary-item-name">
              {item.product.name} (x{item.quantity})
            </span>
            <span className="summary-item-price">
              {formatPrice(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="summary-subtotal">
        <span>Subtotal</span>
        <span>{formatPrice(total)}</span>
      </div>

      <div className="summary-shipping">
        <span>Envío</span>
        <span>Gratis</span>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
};