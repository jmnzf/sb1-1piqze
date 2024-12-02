import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Minus, Plus, BookmarkPlus } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { SellerProducts } from '../../components/products/SellerProducts/SellerProducts';
import { RelatedProducts } from '../../components/products/RelatedProducts/RelatedProducts';
import './ProductDetail.css';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Producto no encontrado</div>;
  }

  // Only show up to 4 images
  const dummyImages = Array(4).fill(product.image);
  const dummyOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-current' : ''}`}
      />
    ));
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
    <>
      <Helmet>
        <title>{`${product.name} - Mercado a la Mano`}</title>
        <meta name="description" content={`Compra ${product.name} de ${product.seller} en Mercado a la Mano`} />
      </Helmet>

      <div className="product-detail">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Inicio</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/catalogo" className="breadcrumb-link">Categoría</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="product-grid">
          <div className="product-images">
            <div className="thumbnail-grid">
              {dummyImages.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="main-image-container">
              <div className="main-image">
                <img src={dummyImages[selectedImage]} alt={product.name} />
              </div>
            </div>
          </div>

          <div className="product-info">
            <div className="seller-info">
              <div className="seller-avatar">
                <img src="https://via.placeholder.com/48" alt={product.seller} />
              </div>
              <div className="seller-details">
                <Link to="#" className="seller-name">{product.seller}</Link>
                <div className="seller-badge">Verificado</div>
              </div>
              <Link to="#" className="visit-seller">Visitar vendedor</Link>
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <div className="rating-info">
                {product.rating} ({product.sales} vendidos)
              </div>
            </div>

            <div className="product-price">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.um && <span className="text-sm text-gray-600">/ {product.um}</span>}
            </div>

            <div className="product-options">
              <h3 className="options-title">Opciones:</h3>
              <div className="options-grid">
                {dummyOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${selectedOption === index ? 'active' : ''}`}
                    onClick={() => setSelectedOption(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-selector">
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="quantity-input">{quantity}</span>
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>

        <SellerProducts 
          seller={product.seller}
          products={products}
          currentProductId={product.id}
        />

        <RelatedProducts 
          currentProductId={product.id}
          products={products}
        />
      </div>
    </>
  );
};