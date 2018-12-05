import React, { Component } from "react";

import { Tasks } from "../api/Tasks.js";

// Task component - representa um a fazer da lista
export default class Task extends Component {
  toggleChecked() {
    // Setta o item checado para nao checado ou vice versa
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked }
    });
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    // Mudando o nome da classe da tarefa para checado ou vazio, para que o css funcione + Renderização
    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
