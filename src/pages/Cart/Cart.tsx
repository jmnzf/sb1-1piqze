import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { CartList } from '../../components/cart/CartList';
import { CartSummary } from '../../components/cart/CartSummary';
import './Cart.css';

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Helmet>
        <title>Mi Carrito - Mercado a la Mano</title>
        <meta name="description" content="Revisa y gestiona los productos en tu carrito de compras" />
      </Helmet>

      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-content">
            <CartList />
            <div className="cart-summary-container">
              <CartSummary />
              <button 
                onClick={handleCheckout}
                className="w-full bg-[--color-text-green] text-white py-3 rounded-full
                         hover:bg-green-700 transition-colors mt-4"
              >
                Continuar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};