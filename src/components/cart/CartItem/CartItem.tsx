import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import type { Product } from '../../../data/products';
import './CartItem.css';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
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
    <div className="cart-item">
      <div className="seller-info">
        <div className="seller-avatar" />
        <div className="seller-details">
          <span className="seller-name">{product.seller}</span>
          <span className="seller-status">Verificado</span>
        </div>
      </div>

      <div className="product-info">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-actions">
            <button 
              className="action-button"
              onClick={() => removeItem(product.id)}
            >
              Eliminar
            </button>
            <button className="action-button">
              Guardar para después
            </button>
          </div>

          <div className="product-controls">
            <div className="quantity-controls">
              <button 
                className="quantity-button"
                onClick={handleDecrement}
                disabled={quantity === 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="quantity">{quantity}</span>
              <button 
                className="quantity-button"
                onClick={handleIncrement}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="price-info">
              <span className="price">{formatPrice(product.price * quantity)}</span>
              {product.freeShipping && (
                <span className="shipping">Envío gratis</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};