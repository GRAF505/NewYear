import React, { useState } from 'react';
import ProductList from './ProductList';

const Products = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className="products">
      <h2>Товары</h2>
      <input
        type="text"
        placeholder="Фильтр по названию"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ProductList filter={filter} />
    </div>
  );
};

export default Products;