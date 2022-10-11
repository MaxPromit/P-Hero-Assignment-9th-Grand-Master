import React from 'react';
import './option.css'

const Option = ({option,hadlerQuizChecker}) => {
    return (
        <div className='option'>
            <ul>
            <li onClick={()=>hadlerQuizChecker(option)}>{option}</li>
            </ul>
        </div>
    );
};

export default Option;