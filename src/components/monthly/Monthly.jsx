import React, {useState} from 'react';

export default function monthly() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
    
  const [days, setDays] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState(0);
  
  const [dayOfMonth, setDayOfMonth] = useState(0);
  const [dayOfWeekName, setDayOfWeekName] = useState("");
  const [dayOfWeekNumber, setDayOfWeekNumber] = useState(0);
  const [dayOfWeekNumberName, setDayOfWeekNumberName] = useState("");

  return (
    <div>
      
    </div>
  );
}
