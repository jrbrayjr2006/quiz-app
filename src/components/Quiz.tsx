import { useState } from 'react';
import QUESTIONS from '../data/questions.ts';

export default function Quiz() {
    // NOTE: The activeQuestionIndex state variable is used to keep track of the currently active question.
    // The activeQuestionIndex can alternatively be derived from the userAnswers array by adding 1 to the length of the array.
    // This approach is used to ensure that the userAnswers array is always in sync with the activeQuestion
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const activeQuestionIndex: number = userAnswers.length;

    function handleSelectAnswer(selectedAnswer: string) {
        console.log('Answer selected is:', selectedAnswer);
        setUserAnswers((previousUserAnswers) => {
            return [...previousUserAnswers, selectedAnswer];
        });
    }

    return (
        <div className="quiz-container">
            <div className="flex flex-col items-center font-mono max-w-3xs md:max-w-screen">
                <h1 className="text-3xl font-bold uppercase">Quiz</h1>
                <h2 className="mt-4">{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul className="max-w-full flex flex-col items-center justify-between mt-4 gap-y-2">
                    {QUESTIONS[activeQuestionIndex].answers.map( answer => 
                        <li key={answer} className="">
                            <button onClick={() => handleSelectAnswer(answer)} className="min-w-3xs max-w-3xs  py-2 px-4 bg-sky-500 text-black rounded-2xl cursor-pointer md:min-w-3xl md:max-w-screen lg:min-w-5xl lg:max-w-screen duration-200 hover:bg-sky-700 hover:text-white">{answer}</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}