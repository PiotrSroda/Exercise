import React, { Component } from 'react';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import '../App.css';


export default class TaskList extends Component {
  onTaskClick(task) {
    this.props.onTaskSelect(task);

}
  renderList() {
    return this.props.tasks.map((task) => {
    return(
        <li
          className="list-item"
          key={task}
          onClick= {event => this.onTaskClick(task)}
          >
    {task}
      </li>
      )
    });
    }
    render () {
      return(
      <ul
        className ="task-list "
      >
        {this.renderList()}
      </ul>
      )
    }






}
