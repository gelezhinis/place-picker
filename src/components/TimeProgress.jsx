import {useState, useEffect} from 'react';

const TimeProgress = ({timer}) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime(prevState => prevState - 10);
    }, 10);

    return () => {
      clearInterval(timerInterval);
    }
  }, []);

  return (
    <progress value={remainingTime} max={timer} />
  );
};

export default TimeProgress;