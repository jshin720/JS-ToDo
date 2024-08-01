import React, { useState } from "react";

export default function TodoForm() {
  const [selectedDay, setSelectedDay] = useState('');
  const [inputValue, setInputValue] = useState("");
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

  const inputTaskHandler = (e) => {
    console.log(e.target, "change")
   
    setInputValue(e.target.value);
  };

  const inputDayHandler = (e) => {
     setSelectedDay(e.target.value);
  }

  const submitHandler = (e) => {
    console.log(e);
    // if (this.state.inputValue !== "") {
    //   this.setState({
    //       toDos: [this.state.inputValue, ...this.state.toDos],
    //       inputValue: "",
    //   });
    // }
  };

  return (
    <div>
      {days.map((day, i) => (
        <>
         <input type="radio" value={selectedDay} name={day} onClick={inputDayHandler}/>
         <label> {day} </label>
        </>
      ))}
      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        id="newTask"
        onChange={inputTaskHandler}
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
