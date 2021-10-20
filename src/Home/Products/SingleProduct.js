import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const SingleProduct = ({ product }) => {
    const { name, img, price, key, description } = product;
    return (
        <div>

            <div className="pb-5 shadow  mb-5 bg-body rounded">
                <img className="pd-img" src={img} alt="" />
                <h5>Product Name: {name}</h5>
                <h6>Price : $ {price}</h6>
                <p>Description: {description.substring(0, 30)}</p>
                <Link to={`/products/${key}`}>
                    <button>Buy:{name} </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleProduct;