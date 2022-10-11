import React from 'react';
import pic from '../../pic/quiz.png'
import './Home.css'

const Home = () => {
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
        </div>
    );
};

export default Home;