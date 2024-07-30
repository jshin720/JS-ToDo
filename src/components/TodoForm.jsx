import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    inputValue: "",
    toDos: []
  };

  submitHandler = = (e) => {
    this.setState({
        toDos: [this.state.inputValue]
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
