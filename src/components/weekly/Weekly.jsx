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


    const [task, setTask] = useState('');
    const [day, setDay] = useState('');
    const [tasks, setTasks] = useState([]);
    const [days, setDays] = useState([]);

    

  return (
    <div>
      
    </div>
  );
}
