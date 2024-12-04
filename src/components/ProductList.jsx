import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ filter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Ёлка 180 см', price: 2500, image: 'https://avatars.mds.yandex.net/get-mpic/3907807/img_id5581688890138104089.jpeg/orig     ' },
      { id: 2, name: 'Гирлянда 10 метров', price: 1200, image: ' https://intex.center/upload/iblock/f65/f65432fb6d0628a61fb98996f6c6cf1f.jpg         ' },
      { id: 3, name: 'Шары набор 50 шт', price: 800, image: 'https://www.vsempodarok.com/upload/iblock/d1b/nabor_yelochnykh_igrushek_novogodnee_popurri_steklo_7_sm_upakovka_24_sht_kaemingk.jpg' },
      { id: 4, name: 'Свечи новогодние', price: 300, image: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/180/006/023/510/241/624/600022483398b0.jpg' },
      { id: 5, name: 'Снежинки декоративные', price: 500, image: 'https://storage.yandexcloud.net/alitops-storage/product-1005002822942580.jpeg' },
      { id: 6, name: 'Новогодний венок', price: 1500, image: 'https://shop-cdn1-2.vigbo.tech/shops/29666/products/14728244/images/3-a87901253a345ea3c6152912433a45b9.jpg' },
      { id: 7, name: 'Ёлочные игрушки', price: 1000, image: 'https://www.vsempodarok.com/upload/iblock/d1b/nabor_yelochnykh_igrushek_novogodnee_popurri_steklo_7_sm_upakovka_24_sht_kaemingk.jpg' },
      { id: 8, name: 'Новогодняя мишура', price: 600, image: 'https://cdn1.ozone.ru/s3/multimedia-w/6142673252.jpg' },
      { id: 9, name: 'Снеговик декоративный', price: 800, image: 'https://goodgifts.ru/upload/iblock/aec/aecf82e6c26e0ac25d69912b86dfa62c.jpg' },
      { id: 10, name: 'Олень декоративный', price: 200, image: 'https://www.hoztovary-zakamie.ru/userfls/shop/large/10/96834_novogodnie-figury.jpg' },
      { id: 11, name: 'Гирлянда шары 15 метров', price: 300, image: 'https://selcdn.fedsp.com/draco/29/2946/20d617b13b240f9f.jpeg' },
      { id: 12, name: 'Новогодняя посуда', price: 1200, image: 'https://i.pinimg.com/736x/29/04/0d/29040d6817778dc89e5cf1b23ae3c96a--spode-christmas-tree-christmas-china.jpg' },
    ];
    setProducts(mockProducts);
  }, []);

  const filteredProducts = filter ? products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())) : products;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;