import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }: { timeout: number; onTimeout: () => void }) {
    const [remainingTime, setRemainingTime] = useState<number>(timeout);

    // let timer;

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
        <progress className="m-0 rounded-full bg-violet-700" max={timeout} value={remainingTime} />
    );
}