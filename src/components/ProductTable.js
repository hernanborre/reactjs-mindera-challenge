import React, { useEffect } from 'react'

export const ProductTable = (props) => {
  const { columns, products } = props

  const visibleColumns = {
    id: columns.id && <th>ID</th>,
    name: columns.name && <th>Name</th>,
    department: columns.department && <th>Department</th>,
    price: columns.price && <th>Price</th>,
    currency: columns.currency && <th>Currency</th>,

  }
  
  return (
    <div id="product-table">
      <header>
        <strong>Products ({products?.length ?? 0} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {visibleColumns.id}
            {visibleColumns.name}
            {visibleColumns.department}
            {visibleColumns.price}
            {visibleColumns.currency}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              {visibleColumns.id && <td>{product.id}</td>}
              {visibleColumns.name && <td>{product.name}</td>}
              {visibleColumns.department && <td>{product.department}</td>}
              {visibleColumns.price && <td>{product.price}</td>}
              {visibleColumns.currency && <td>{product.currency}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
