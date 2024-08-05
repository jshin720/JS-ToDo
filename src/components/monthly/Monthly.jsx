import React, {useState} from 'react';

export default function monthly() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
    
  const [days, setDays] = useState([]);
  const [day, setDay] = useState(1);

  return (
    <div>
      
    </div>
  );
}
