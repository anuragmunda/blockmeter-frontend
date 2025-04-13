import { useEffect, useState } from 'react';

export function useCountdownToNextMinute() {
    const [secondsLeft, setSecondsLeft] = useState(60);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const seconds = now.getSeconds();
            setSecondsLeft(60 - seconds);
        };

        update(); // run immediately
        const interval = setInterval(update, 1000); // update every second

        return () => clearInterval(interval);
    }, []);

    return secondsLeft;
}
