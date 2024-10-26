import React from "react";

const Day = ({ date, max, min, code, isToday }) => {
  const getWeatherIcon = (wmoCode) => {
    const icons = {
      0: "☀️",
      1: "🌤",
      2: "⛅️",
      3: "☁️",
      45: "🌫",
      48: "🌫",
      51: "🌦",
      56: "🌦",
      61: "🌦",
      66: "🌦",
      80: "🌦",
      53: "🌧",
      55: "🌧",
      63: "🌧",
      65: "🌧",
      57: "🌧",
      67: "🌧",
      81: "🌧",
      82: "🌧",
      71: "🌨",
      73: "🌨",
      75: "🌨",
      77: "🌨",
      85: "🌨",
      86: "🌨",
      95: "🌩",
      96: "⛈",
      99: "⛈",
    };

    return icons[wmoCode] || "❓";
  };

  const formatDay = (dateStr) =>
    new Intl.DateTimeFormat("en", { weekday: "short" }).format(
      new Date(dateStr)
    );

  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
};

export default Day;
