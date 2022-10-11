import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'

const QuizQuestion = ({singlequestion}) => {
    const {question,options,correctAnswer} = singlequestion;

    const hadlerQuizChecker = (question) =>{
        if(correctAnswer === question){
            console.log('You are right');
        }else{
            console.log('You Provabli Wrogn')
        }
    }

    return (
        <div className='quiz_cart'>
            <h5 className='m-3'>{question}</h5>
            {
                options.map(option => <Option hadlerQuizChecker={hadlerQuizChecker} option={option}></Option>)
            }
        </div>
    );
};

export default QuizQuestion;