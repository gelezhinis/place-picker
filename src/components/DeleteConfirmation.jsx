import {useEffect, useState} from 'react';
import TimeProgress from './TimeProgress';

const TIMER = 5000;
const SECONDS = 5;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingSeconds, setRemainingSeconds] = useState(SECONDS);


  useEffect(() => {
    const secondsInterval = setInterval(() => {
      setRemainingSeconds(prevState => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(secondsInterval);
    }
  }, []);

  useEffect(() => {
    const threeSecondsTimer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(threeSecondsTimer);
    }
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place? It will removes itself after {remainingSeconds} seconds.</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <TimeProgress timer={TIMER} />
    </div>
  );
}
