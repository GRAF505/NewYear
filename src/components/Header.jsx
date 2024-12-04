import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Новогодние украшения для дома</h1>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Товары</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;