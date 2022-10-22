import { useState, useRef, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValfRef = useRef<number | null>(null);
  const stopTimer = () => {
    if (interValfRef.current) window.clearInterval(interValfRef.current);
  };
  useEffect(() => {
    interValfRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
