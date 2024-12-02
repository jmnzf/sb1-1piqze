import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../ProductCard';
import { Product } from '../../../data/products';
import './RelatedProducts.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface RelatedProductsProps {
  currentProductId: number;
  products: Product[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  products
}) => {
  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 8);

  return (
    <section className="related-products">
      <div className="related-products-header">
        <h2 className="related-products-title">Productos relacionados</h2>
      </div>

      <div className="products-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          spaceBetween={24}
          className="slider-container"
        >
          {relatedProducts.map(product => (
            <SwiperSlide key={product.id} className="product-slide">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};