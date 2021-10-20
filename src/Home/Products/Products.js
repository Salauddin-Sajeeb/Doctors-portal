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
        <div className="">
            <h1 className="border-round">Our Products</h1>
            <div className="container body-container">
                <div className="container-product">

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