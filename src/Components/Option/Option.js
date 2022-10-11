import React from 'react';
import './option.css'

const Option = ({option}) => {
    return (
        <div className='option'>
            <ul>
            <li>{option}</li>
            </ul>
        </div>
    );
};

export default Option;