import { useState, useEffect } from "react";
import { useCartContext } from "../provider/CartProvider";

export default function Timer() {
  const [time, setTime] = useState(3); // 60sec
  const { cartAction } = useCartContext();

  useEffect(() => {
    let interval = null;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    if (time == 0) {
      cartAction.clearCart();
      return "time out";
    }
    return `${minutes.toString().padStart(2, "0")}:${remaining
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div>
      <p>
        {/* {time != 0 ? formatTime(time) : "หมดเวลาสั่งซื้อ กรุณาทำรายการใหม่"} */}
        {formatTime(time)}
      </p>
    </div>
  );
}
