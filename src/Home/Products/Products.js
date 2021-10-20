import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import './product.css'

const Products = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(rest => rest.json())
            .then(data => setProduct(data))


    }, [])

    return (
        <div>
            <div className="rounded-pill w-100 border border-dark text-center p-3 my-3 "><h1 id="products" className="text-center">Our Products</h1></div>
            <div className="container body-container">
                <div className="container-product mt-5">

                    {
                        products.map(product => <SingleProduct
                            key={product.key}
                            product={product}

                        ></SingleProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;