import React from 'react';

const SingleProduct = ({product}) => {
    const {logo, name} = product
    return (
        <div>
            <div className='product_cart'>
                <div className='product_img'>
                    <img src={logo} alt="" />
                </div>
                <div className='product_info'>
                    {name}
                    <button>Get Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;