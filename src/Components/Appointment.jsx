import React, { useState, useEffect } from "react";

const DigitalNumberFontStyle = {
  fontFamily: "Orbitron",
  fontSize: "24em",
  fontWeight: "bold",
  color: "#000",
};

const centerTextStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // 100% of the viewport height
};

const QueuePositionDisplay = () => {
  const [queuePosition, setQueuePosition] = useState(1);

  useEffect(() => {
    // Update the queue position every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      const storedPosition = localStorage.getItem("Current");

      if (storedPosition) {
        setQueuePosition(parseInt(storedPosition, 10));
      }
    }, 1);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={DigitalNumberFontStyle}>
      <div style={centerTextStyle}>{queuePosition}</div>
    </div>
  );
};

export default QueuePositionDisplay;
