import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = ({product}) => {
    const {logo, name,id} = product
    return (
        <div>
            <div className='product_cart'>
                <div className='product_img'>
                    <img src={logo} alt="" />
                </div>
                <div className='product_info'>
                    <h4> {name}</h4>
                    <Link to={`/quiz/${id}`}><button>Get Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;