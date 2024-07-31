import React, { useState } from 'react';

export default function TodoForm() {
  const [day, setDay] = useState("")
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  } 

  const submitHandler = (e) => {
    console.log(e)
    // if (this.state.inputValue !== "") {
    //   this.setState({
    //       toDos: [this.state.inputValue, ...this.state.toDos],
    //       inputValue: "",
    //   });
    // } 
  };


  return (
    <div>
      <input
          type="text"
          placeholder="Enter Task"
          value={this.state.inputValue}
          id="newTask"
          onChange={this.inputChangeHandler}
        />
        <button type="button"  onClick={this.submitHandler}>add task</button>
        <ol>
            {this.state.toDos.map((todo, i) => (
                <li key={i}>{todo}</li>
            )
            )}
        </ol>
    </div>
  );
}
