import React, {useState} from 'react';
import Product from './Product';
import {Data} from './Data';
import './Products.css';

const Products = () => {
    const [state, setState] = useState(Data);

   
    return (
        <div className="products">
            <div className="inside-container">
                <h3>Products</h3>
                <div className="products-center">
                    {state.map(product=>
                        <Product key={product._id} data={product}/>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Products
