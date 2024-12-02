import React from 'react';
import { CartItem } from '../CartItem';
import { useCart } from '../../../context/CartContext';
import './CartList.css';

export const CartList: React.FC = () => {
  const { items } = useCart();

  return (
    <div className="cart-list">
      <h1 className="cart-title">Mi carrito ({items.length} artículos)</h1>
      
      <div className="cart-items">
        {items.map((item) => (
          <CartItem 
            key={item.product.id} 
            item={item}
          />
        ))}
      </div>
    </div>
  );
};