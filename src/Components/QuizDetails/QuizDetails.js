import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h3>Quiz  DEtails Page</h3>
        </div>
    );
};

export default QuizDetails;