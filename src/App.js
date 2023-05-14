import React from 'react'

import { ProductSearch } from './components/ProductSearch'
import products from './assets/products.json';

const App = () => {
  console.log(products)
  return <ProductSearch products={products} />
}

export default App;
