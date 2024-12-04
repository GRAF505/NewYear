import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} руб.</p>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;