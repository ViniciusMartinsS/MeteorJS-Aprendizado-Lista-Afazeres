import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";

import { Tasks } from "../api/Tasks.js";

import Task from "./Task.js";

// App component - Representando toda a aplicação, aqui desenvolvemos o front c/ alguns nuances de back
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Achando o field de texto via a Refrencia do react
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    // Inserindo no mongo db
    Tasks.insert({
      text,
      createdAt: new Date() // current time
    });

    // Limpando o input de texto
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }

  //renderizando as task salvas no banco e percorrendo usando o map
  renderTasks() {
    return this.props.tasks.map(task => <Task key={task._id} task={task} />);
  }

  //Literalmente todo o front-end
  render() {
    return (
      <div className="container">
        <header>
          <h1>Lista de Afazeres</h1>

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              placeholder="Insira aqui uma tarefa..."
            />
          </form>
        </header>

        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}

//Select no mongo DB
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(App);
