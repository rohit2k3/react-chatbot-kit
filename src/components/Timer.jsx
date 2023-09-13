import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();
  const [time, settime] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        settime((prevTime) => prevTime - 1);
      } else {
        clearInterval(intervalId);
        navigate("/result");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, navigate]);

  return (
    <div>
      {time === 0 ? <p className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg">Redirecting to result page</p> : <p className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg">{time}...</p>}
    </div>
  );
};

export default Timer;
