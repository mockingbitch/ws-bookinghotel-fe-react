import React, { Component } from "react";
import moment, { weekdays } from "moment";
import './Calendar.scss'

export default function Calendar() {
  const value = moment();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
console.log(calendar)
  return (
    <div className="calendar">
      {calendar.map((week) => (
        <div className="day">
          {week.map((day) => (
            <div>{day.format("D").toString()}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
