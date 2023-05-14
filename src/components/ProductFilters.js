import React from "react";

export const ProductFilters = (props) => {
  const onPriceChange = (e) => {
    const { name, value } = e.target
    let num = typeof value != 'number' ? parseFloat(value) : value
    props.onPriceChange(name, num)
  }

  return (
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          placeholder="Min price..."
          value={props.minPrice}
          onChange={onPriceChange}
        />
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          placeholder="Max price..."
          value={props.maxPrice}
          onChange={onPriceChange}
        />
      </div>
  );
};
