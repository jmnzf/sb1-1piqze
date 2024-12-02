import React from 'react';
import { categories } from '../../../data/categories';
import { CategoryCard } from '../CategoryCard';
import './FeaturedCategories.css';

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="featured-categories">
      <div className="featured-categories-container">
        <h2 className="featured-categories-title">Categorías Destacadas</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};