import { useState, useEffect } from 'react';

interface QuestionTimerProps {
    timeout: number;
    onTimeout: () => void;
    mode: string | undefined;
}

export default function QuestionTimer({ timeout, onTimeout, mode }: QuestionTimerProps) {
    const [remainingTime, setRemainingTime] = useState<number>(timeout);

    useEffect(() => {
        console.log('Setting timeout');
        const questionTimout = setTimeout(onTimeout, timeout);

        return () => {
            console.log('Clearing timeout');
            clearTimeout(questionTimout);
        }
    }, [timeout, onTimeout]); // Add a dependency array
    

    useEffect(() => {
        console.log('Setting interval');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            console.log('Clearing interval');
            clearInterval(interval);
        }
    }, [])


    // clearTimeout(timer);

    return (
        <progress className={mode} max={timeout} value={remainingTime} />
    );
}