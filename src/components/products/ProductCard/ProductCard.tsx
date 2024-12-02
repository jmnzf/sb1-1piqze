import React, { useState } from 'react';
import { Bookmark, Star, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../../data/products';
import { useCart } from '../../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-current' : ''}`}
      />
    ));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    // Add the product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`} className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <button className="bookmark-button">
          <Bookmark className="w-5 h-5 text-gray-600" />
        </button>
      </Link>
      
      <div className="product-info">
        <p className="seller-name">{product.seller}</p>
        <Link to={`/producto/${product.id}`} className="product-name">{product.name}</Link>
        <p className="price">{formatPrice(product.price)} <span className="sales">{product.um}</span></p>
        
        <div className="rating-container">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="sales">{product.sales} vendidos</span>
        </div>
        
        <div className="shipping-stock">
          {product.freeShipping && (
            <p className="free-shipping">Envío gratis</p>
          )}
          <p className="stock-status">{product.stock}</p>
        </div>
        
        <div className="cart-controls">
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
          
          <button 
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};