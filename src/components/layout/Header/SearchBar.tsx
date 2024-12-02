import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar producto..."
        className="search-input"
      />
      <button className="search-button">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};