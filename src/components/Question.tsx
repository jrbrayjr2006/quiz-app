import QuestionTimer from './QuestionTimer.tsx';
import Answers from './Answers.tsx';

interface QuestionProps {
    questionText: string | null;
    activeQuestionIndex: number;
    answers: string[];
    onAnswerSelected: (answer: string) => void;
    onSkipAnswer: () => void;
    answerState: string | null;
    userAnswers: (string | null)[];
}

export default function Question({ questionText, activeQuestionIndex, answers, onAnswerSelected, onSkipAnswer, answerState, userAnswers } : QuestionProps) {
    return (
        <>
            <QuestionTimer
                timeout={15000} 
                onTimeout={onSkipAnswer} />
            <h2 className="mt-4">{questionText}</h2>
            <Answers 
                answers={answers} 
                onAnswerSelected={onAnswerSelected} 
                answerState={answerState} 
                userAnswers={userAnswers} />
        </>
    );
}