import { useState, useCallback } from 'react';
import QUESTIONS from '../data/questions.ts';
import quizIsCompleteImage from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.tsx';
import Answers from './Answers.tsx';
import Question from './Question.tsx';

export default function Quiz() {
    const [answerState, setAnswerState] = useState<string | null>('');
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    const activeQuestionIndex: number = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer: string | null) {
        console.log('Answer selected is:', selectedAnswer);
        setAnswerState('answered');
        setUserAnswers((previousUserAnswers) => {
            return [...previousUserAnswers, selectedAnswer];
        });
        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('incorrect');
            }

            // reset answer state after answer is selected
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
            <div>
                <img src={quizIsCompleteImage} alt="Quiz is completed" />
                <h2>Quiz is completed!</h2>
            </div>
        )
    } else {
        return (
            <div className="quiz-container">
                <div className="flex flex-col items-center font-mono max-w-3xs md:max-w-screen">
                    <h1 className="text-3xl font-bold uppercase mb-2">Quiz</h1>
                    <Question key={activeQuestionIndex} 
                        questionText={QUESTIONS[activeQuestionIndex].text} 
                        activeQuestionIndex={activeQuestionIndex} 
                        answers={QUESTIONS[activeQuestionIndex].answers} 
                        onAnswerSelected={handleSelectAnswer} 
                        onSkipAnswer={handleSkipAnswer} 
                        answerState={answerState} 
                        userAnswers={userAnswers} />
                </div>
            </div>
        )
    }
}