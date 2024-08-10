import React, {useState} from 'react';

export default function monthly() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

    
  const [days, setDays] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState(0);
  
  const [dayOfMonth, setDayOfMonth] = useState(0);

  return (
    <div>
      
    </div>
  );
}
