import React, { Component } from 'react';
import '../App.css';
import Button from '../components/button'


export default class TaskList extends Component {
  onUser1Click(task) {
    this.props.onUser1Select(task);

  }
  onUser2Click(task) {
    this.props.onUser2Select(task);

  }
  onUser3Click(task) {
    this.props.onUser3Select(task);

  }

  renderList() {

    return this.props.tasks.map((task) => {
    return(

        <li
          className="list-item text-white bg-dark"
          key={task}
          >
    <div className="rowB" >{task}
      <div className = "buttonPosition"><Button
        tasks = {task}
        onUser1Select = {() => this.onUser1Click(task)}
        onUser2Select = {() => this.onUser2Click(task)}
        onUser3Select = {() => this.onUser3Click(task)}
      /></div></div>
      </li>
      )
    });
    }
    render () {
      return(
      <ul
        className ="task-list container"
      >
        {this.renderList()}
      </ul>
      )
    }






}
