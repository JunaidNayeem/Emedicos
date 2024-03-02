import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OtherPage() {
  const location = useLocation();
  const queuePosition = new URLSearchParams(location.search).get(
    "queuePosition"
  );

  useEffect(() => {
    // Use the queuePosition as needed
    console.log("Queue Position:", queuePosition);
  }, [queuePosition]);

  // Rest of your component code
}
