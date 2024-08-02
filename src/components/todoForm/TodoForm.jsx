import React, { useState } from "react";



export default function TodoForm() {
  const [selectedDay, setSelectedDay] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  
  const submitHandler = (e) => {
    console.log(selectedDay)
    console.log(inputValue);
    if (inputValue !== "") {
      setState({
          toDos: [this.state.inputValue, ...this.state.toDos],
          inputValue: "",
      });
    }
  };

  return (
    <div>
      {days.map((day, i) => (
        <>
         <input type="radio" value={day} name={day} onChange={(e) => setSelectedDay(e.target.value)}/>
         <label> {day} </label>
        </>
      ))}
      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        id="newTask"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={submitHandler}>
        add task
      </button>
      <ol>
        {toDos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ol>
    </div>
  );
}
