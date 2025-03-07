import { useState, useCallback } from 'react';
import QUESTIONS from '../data/questions.ts';
import quizIsCompleteImage from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.tsx';

export default function Quiz() {    
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    const activeQuestionIndex: number = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer: string | null) {
        console.log('Answer selected is:', selectedAnswer);
        setUserAnswers((previousUserAnswers) => {
            return [...previousUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
            <div>
                <img src={quizIsCompleteImage} alt="Quiz is completed" />
                <h2>Quiz is completed!</h2>
            </div>
        )
    } else {
        const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(() => Math.random() - 0.5);
        return (
            <div className="quiz-container">
                <div className="flex flex-col items-center font-mono max-w-3xs md:max-w-screen">
                    <h1 className="text-3xl font-bold uppercase mb-2">Quiz</h1>
                    <QuestionTimer key={activeQuestionIndex} timeout={15000} onTimeout={handleSkipAnswer} />
                    <h2 className="mt-4">{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul className="max-w-full flex flex-col items-center justify-between mt-4 gap-y-2">
                        {shuffledAnswers.map( answer => 
                            <li key={answer} className="">
                                <button onClick={() => handleSelectAnswer(answer)} className="min-w-3xs max-w-3xs  py-2 px-4 bg-sky-500 text-black rounded-2xl cursor-pointer md:min-w-3xl md:max-w-screen lg:min-w-5xl lg:max-w-screen duration-200 hover:bg-sky-700 hover:text-white">{answer}</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}