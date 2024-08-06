import React, {useState} from 'react';

export default function Weekly() {
  const [week, setWeek] = useState([
    {day: 'Monday', tasks: []},
    {day: 'Tuesday', tasks: []},
    {day: 'Wednesday', tasks: []},
    {day: 'Thursday', tasks: []},
    {day: 'Friday', tasks: []},
    {day: 'Saturday', tasks: []},
    {day: 'Sunday', tasks: []}
    ]);


  return (
    <div>
      
    </div>
  );
}
