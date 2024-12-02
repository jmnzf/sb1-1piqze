import React, { useState } from 'react';
import { FilterSection } from '../FilterSection/FilterSection';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './Filters.css';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface PriceRange {
  id: string;
  range: string;
  count: number;
}

interface Brand {
  id: string;
  name: string;
  count: number;
}

interface ShippingOption {
  id: string;
  name: string;
  count: number;
}

const categories: Category[] = [
  { id: '1', name: 'Frutas y verduras', count: 120 },
  { id: '2', name: 'Carnes', count: 85 },
  { id: '3', name: 'Viveres', count: 200 },
  { id: '4', name: 'Artesanías', count: 45 },
  { id: '5', name: 'Hogar', count: 150 },
];

const priceRanges: PriceRange[] = [
  { id: '1', range: '$0 - $50.000', count: 150 },
  { id: '2', range: '$50.000 - $100.000', count: 120 },
  { id: '3', range: '$100.000 - $200.000', count: 80 },
  { id: '4', range: 'Más de $200.000', count: 50 },
];

const brands: Brand[] = [
  { id: '1', name: 'Marca 1', count: 45 },
  { id: '2', name: 'Marca 2', count: 38 },
  { id: '3', name: 'Marca 3', count: 32 },
  { id: '4', name: 'Marca 4', count: 28 },
];

const shippingOptions: ShippingOption[] = [
  { id: '1', name: 'Gratis', count: 150 },
  { id: '2', name: 'Entrega en 24h', count: 85 },
];

export const Filters: React.FC = () => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    brands: true,
    shipping: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: new Set<string>(),
    priceRanges: new Set<string>(),
    brands: new Set<string>(),
    shipping: new Set<string>(),
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFilter = (
    type: keyof typeof selectedFilters,
    id: string
  ) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev[type]);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return { ...prev, [type]: newSet };
    });
  };

  return (
    <div className="filters-container">
      <FilterSection
        title="Categorías"
        isOpen={openSections.categories}
        onToggle={() => toggleSection('categories')}
      >
        {categories.map(category => (
          <FilterCheckbox
            key={category.id}
            label={category.name}
            count={category.count}
            checked={selectedFilters.categories.has(category.id)}
            onChange={() => toggleFilter('categories', category.id)}
          />
        ))}
      </FilterSection>

      <FilterSection
        title="Precio"
        isOpen={openSections.price}
        onToggle={() => toggleSection('price')}
      >
        {priceRanges.map(range => (
          <FilterCheckbox
            key={range.id}
            label={range.range}
            count={range.count}
            checked={selectedFilters.priceRanges.has(range.id)}
            onChange={() => toggleFilter('priceRanges', range.id)}
          />
        ))}
      </FilterSection>

      <FilterSection
        title="Marca"
        isOpen={openSections.brands}
        onToggle={() => toggleSection('brands')}
      >
        {brands.map(brand => (
          <FilterCheckbox
            key={brand.id}
            label={brand.name}
            count={brand.count}
            checked={selectedFilters.brands.has(brand.id)}
            onChange={() => toggleFilter('brands', brand.id)}
          />
        ))}
      </FilterSection>

      <FilterSection
        title="Envío"
        isOpen={openSections.shipping}
        onToggle={() => toggleSection('shipping')}
      >
        {shippingOptions.map(option => (
          <FilterCheckbox
            key={option.id}
            label={option.name}
            count={option.count}
            checked={selectedFilters.shipping.has(option.id)}
            onChange={() => toggleFilter('shipping', option.id)}
          />
        ))}
      </FilterSection>

      <button 
        className="apply-filters-button"
        onClick={() => console.log('Applying filters:', selectedFilters)}
      >
        Aplicar filtros
      </button>
    </div>
  );
};