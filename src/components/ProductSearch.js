import React, { useEffect, useState } from 'react'

import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductTable } from './ProductTable';
import { ProductFilters } from './ProductFilters';

export const ProductSearch = ({products}) => {
  const [filteredItems, setFilteredItems] = useState(products)
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });
  
  useEffect(()=>{
    onFilter()
  }, [price])

  const onColumnToggle = (name, checked) => {
    console.log(name, checked)
    setToggles({ ...toggles, [name]: checked })
    console.log(toggles)
  }

  const onFilter = () => {
    let priceFilteredItems = products.filter(
      (product) => {
        if(price.minPrice >= 0 && price.maxPrice >= 0){
          return (product.price >= price.minPrice || !price.minPrice) &&
          (product.price <= price.maxPrice || !price.maxPrice)
        }else if(price.minPrice <0 && price.maxPrice >=0){
          return  (product.price <= price.maxPrice || !price.maxPrice)        
        }else if(price.maxPrice < 0 && price.minPrice >=0){
          return  (product.price <= price.minPrice || !price.minPrice)        
        }
      }
    );
    setFilteredItems(()=>[...priceFilteredItems])
    console.log(filteredItems.length)
  }

  const onPriceChange = (name, value) => {
    setPrice({ ...price, [name]: value});
  }

  return (
    <div className="Products">
      <ProductFilters
        minPrice={price.minPrice}
        maxPrice={price.maxPrice}
        onPriceChange={onPriceChange}
        />

      <ColumnToggle
        onToggle={onColumnToggle}
        toggles={toggles} />

      <ProductTable
        products={filteredItems}
        columns={toggles} />
    </div>
  );
}

export default ProductSearch;
