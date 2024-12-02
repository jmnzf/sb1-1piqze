import React, { useState, useEffect, useRef } from 'react';
import { Loader } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { products as allProducts } from '../../../data/products';
import { ProductCard } from '../ProductCard';
import './FeaturedProducts.css';

const PRODUCTS_PER_PAGE = 10;

export const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState(allProducts.slice(0, PRODUCTS_PER_PAGE));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  const loadMoreProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const currentLength = products.length;
    const nextProducts = allProducts.slice(
      currentLength,
      currentLength + PRODUCTS_PER_PAGE
    );
    
    if (nextProducts.length > 0) {
      setProducts(prev => [...prev, ...nextProducts]);
    }
    
    setHasMore(currentLength + nextProducts.length < allProducts.length);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setSelectedProductIndex(prev => {
          const newIndex = Math.max(0, prev - 1);
          productRefs.current[newIndex]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
          });
          return newIndex;
        });
      } else if (e.key === 'ArrowRight') {
        setSelectedProductIndex(prev => {
          const newIndex = Math.min(products.length - 1, prev + 1);
          productRefs.current[newIndex]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
          });
          return newIndex;
        });
      } else if (e.key === 'Enter') {
        const selectedProduct = products[selectedProductIndex];
        if (selectedProduct) {
          navigate(`/producto/${selectedProduct.id}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [products.length, selectedProductIndex, navigate]);

  return (
    <section className="featured-products">
      <div className="featured-products-container">
        <div className="featured-products-header">
          <h2 className="featured-products-title">Productos Destacados</h2>
          <a href="/productos" className="view-all">Ver todos</a>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className={`product-wrapper ${selectedProductIndex === index ? 'selected' : ''}`}
              tabIndex={0}
              onClick={() => setSelectedProductIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/producto/${product.id}`);
                }
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {(hasMore || loading) && (
          <div ref={ref} className="loading-spinner">
            <Loader />
          </div>
        )}
      </div>
    </section>
  );
};