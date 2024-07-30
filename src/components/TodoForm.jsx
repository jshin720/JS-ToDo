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
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button type="button">add task</button>
        <ol>
            {this.state.toDos.map((todo) => (
                <li>{todo}</li>
            )
            )}
        </ol>
      </div>
    );
  }
}
