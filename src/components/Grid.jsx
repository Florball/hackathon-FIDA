import React from 'react'
import Product from './Product'

const Grid = () => {
  return (
    <div className="container">
      <div className="row mx-md-n5 justify-content-center">
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
}
export default Grid
