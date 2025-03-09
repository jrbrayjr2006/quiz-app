import { useRef } from 'react';

interface AnswersProps {
    answers: string[];
    onAnswerSelected: (answer: string) => void;
    answerState: string | null;
    userAnswers: (string | null)[];
}

export default function Answers({ answers, onAnswerSelected, answerState, userAnswers }: AnswersProps) {
    const shuffledAnswers = useRef<string[] | null>(null);

    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    
    return (
        <ul className="max-w-full flex flex-col items-center justify-between mt-4 gap-y-2">
            {shuffledAnswers.current.map( answer => {
                const isSelected: boolean = userAnswers[userAnswers.length - 1] === answer;
                let cssButtonClasses: string = "button-standard button-standard-colors";
                if(answerState === 'answered' && isSelected) {
                    cssButtonClasses = "button-standard button-answer-selected";
                }

                if((answerState === 'correct' || answerState === 'incorrect') && isSelected) {
                    cssButtonClasses = answerState === 'correct' ? "button-standard button-answer-correct" : "button-standard button-answer-incorrect";
                }
                return (
                    <li key={answer} className="">
                        <button onClick={() => onAnswerSelected(answer)} className={cssButtonClasses}>{answer}</button>
                    </li>
                );}
            )}
        </ul>
    );
}