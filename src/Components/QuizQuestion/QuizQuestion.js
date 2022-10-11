import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({singlequestion}) => {
    const {question,options,correctAnswer} = singlequestion;

    const hadlerQuizChecker = (question) =>{
        if(correctAnswer === question){
            toast('Appriciated')
        }else{
            toast('Wrogn Answer Mate')
        }
    }

    return (
        <div className='quiz_cart'>
            <h5 className='m-3'>{question}</h5>
            {
                options.map(option => <Option hadlerQuizChecker={hadlerQuizChecker} option={option}></Option>)
            }
             <ToastContainer />
        </div>
    );
};

export default QuizQuestion;