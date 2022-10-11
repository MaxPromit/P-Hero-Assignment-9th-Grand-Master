import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from '../../pic/quiz.png'
import SingleProduct from '../SingleProduct/SingleProduct';
import './Home.css'

const Home = () => {
    const productItem = useLoaderData();
    const products = productItem.data;
    console.log(products)
    return (
        <div>
           <div className="banner">
           <div className='banner_info'>
                <h4>Be The Quiz Chammpion!!!</h4>
           </div>
           <div className="banner_img">
           <img src={pic} alt="" />
           </div>

           </div>
           {
                products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
           }
        </div>
    );
};

export default Home;