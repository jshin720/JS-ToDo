import React, { useState } from "react";

export default function DailyForm() {
  const [days, setDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  const [week, setWeek] = useState([]);
  const [day, setDay] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");

 

  



  return <div></div>;
}
