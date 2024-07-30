import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    inputValue: "",
    toDos: []
  };

  inputChangeHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  } 

  submitHandler = (e) => {
    this.setState({
        toDos: [this.state.inputValue, ...this.state.toDos],
        inputValue: "",
    });
  };

  render() {
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
}
