import React, { useState } from "react";

export default function TodoForm() {
  const [selectedDay, setSelectedDay] = useState("");
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

  const changeHandler = (e) => {
    console.log(e.target.value);
    // if (inputValue !== "") {
    //   setState({
    //       toDos: [this.state.inputValue, ...this.state.toDos],
    //       inputValue: "",
    //   });
    // }
  };

  return (
    <div>
      {days.map((day, i) => (
        <>
          <input
            type="radio"
            value={selectedDay}
            name={day}
            onChange={changeHandler}
          />
          <label> {day} </label>
        </>
      ))}
      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        id="newTask"
        onChange={changeHandler}
      />
      <button type="submit" >
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
