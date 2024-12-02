import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Banner } from '../../components/layout/Banner';
import { FeaturedCategories } from '../../components/categories/FeaturedCategories';
import { FeaturedProducts } from '../../components/products/FeaturedProducts';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mercado a la Mano - Inicio</title>
        <meta name="description" content="Conecta con compradores locales y revoluciona tu forma de hacer compras en Barranquilla" />
      </Helmet>
      
      <Banner />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
};