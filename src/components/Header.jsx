/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function Header() {
  const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
  const [dayPart, getDayPart] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    currentHour >= 0 && currentHour < 12
      ? getDayPart(greetings[0])
      : currentHour >= 12 && currentHour < 18
      ? getDayPart(greetings[1])
      : currentHour >= 18 && currentHour < 24
      ? getDayPart(greetings[2])
      : ("", console.error('fetching failed'));
  }, []);

  return <h1>{dayPart}, Mark</h1>;
}

export default Header;
