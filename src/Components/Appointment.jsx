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
  height: "100vh",
};

const QueuePositionDisplay = () => {
  const [queuePosition, setQueuePosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedPosition = localStorage.getItem("Current");

      if (storedPosition) {
        setQueuePosition(parseInt(storedPosition, 10));
      }
    }, 1);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={DigitalNumberFontStyle}>
      <div style={centerTextStyle}>{queuePosition}</div>
    </div>
  );
};

export default QueuePositionDisplay;
