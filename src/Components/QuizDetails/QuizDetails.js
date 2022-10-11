import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizes = useLoaderData();
    const quiz = quizes.data;
    const {name,questions} = quiz;
    // console.log(quiz)
    
    return (
        <div>
            <h3>Check Your Knowledge</h3>
            <h4>{name}</h4>
            {
                questions.map(singlequestion => <QuizQuestion key={singlequestion.id} singlequestion={singlequestion}></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;