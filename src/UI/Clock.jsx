import { useEffect, useState } from "react";

const Clock = () => {
  // Create time left
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const CountDown = () => {
    const destination = new Date("April, 16, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor((different / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((different / 1000 / 60) % 60);
      const seconds = Math.floor((different / 1000) % 60);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    CountDown();
  });

  return (
    <div className="clock__wrapper flex items-center gap-2 -ml-2">
      <div className="clock__data flex items-center gap-2 mx-2 ">
        <div>
          <h1 className="text-3xl font-light mb-[6px]">{days}</h1>
          <h5 className="text-l font-medium">Days</h5>
        </div>
        <span>:</span>
      </div>
      <div className="clock__data flex items-center gap-2 mx-2">
        <div>
          <h1 className="text-3xl font-light mb-[6px]">{hours}</h1>
          <h5 className="text-l font-medium">Hours</h5>
        </div>
        <span>:</span>
      </div>
      <div className="clock__data flex items-center gap-2 mx-2">
        <div>
          <h1 className="text-3xl font-light mb-[6px]">{minutes}</h1>
          <h5 className="text-l font-medium">Minutes</h5>
        </div>
        <span>:</span>
      </div>
      <div className="clock__data flex items-center gap-2 mx-2">
        <div>
          <h1 className="text-3xl font-light mb-[6px]">{seconds}</h1>
          <h5 className="text-l font-medium">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
