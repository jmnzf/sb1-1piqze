import React from 'react';
import { Category } from '../../../data/categories';
import './CategoryCard.css';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="category-card">
      <img 
        src={category.image} 
        alt={category.title} 
        className="category-image"
      />
      <button className="category-button" title={category.title}>
        {category.title}
      </button>
    </div>
  );
};