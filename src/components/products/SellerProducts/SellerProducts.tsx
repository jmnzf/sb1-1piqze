import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../ProductCard';
import { Product } from '../../../data/products';
import './SellerProducts.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface SellerProductsProps {
  seller: string;
  products: Product[];
  currentProductId: number;
}

export const SellerProducts: React.FC<SellerProductsProps> = ({
  seller,
  products,
  currentProductId
}) => {
  const sellerProducts = products
    .filter(p => p.seller === seller && p.id !== currentProductId)
    .slice(0, 8);

  if (sellerProducts.length === 0) return null;

  return (
    <section className="seller-products">
      <div className="seller-products-header">
        <h2 className="seller-products-title">Más productos de {seller}</h2>
        <a href="#" className="view-all">Ver todos</a>
      </div>

      <div className="products-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          spaceBetween={24}
          className="slider-container"
        >
          {sellerProducts.map(product => (
            <SwiperSlide key={product.id} className="product-slide">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};