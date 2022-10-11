import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'

const QuizQuestion = ({singlequestion}) => {
    const {question,options} = singlequestion;
    return (
        <div className='quiz_cart'>
            <h5 className='m-3'>{question}</h5>
            {
                options.map(option => <Option option={option}></Option>)
            }
        </div>
    );
};

export default QuizQuestion;