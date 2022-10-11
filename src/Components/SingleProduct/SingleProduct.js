import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({product}) => {
    const {logo, name} = product
    return (
        <div>
            <div className='product_cart'>
                <div className='product_img'>
                    <img src={logo} alt="" />
                </div>
                <div className='product_info'>
                    <h4> {name}</h4>
                    <button>Get Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;