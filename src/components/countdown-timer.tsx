import { useCountdownToNextMinute } from "@/hooks/useCountdownToNextMinute";

const CountdownTimer = () => {
    const secondsLeft = useCountdownToNextMinute();

    return (
        <h2 className="text-xl font-semibold tracking-wider text-cyan-500">
            {secondsLeft}
        </h2>
    );
};

export default CountdownTimer;