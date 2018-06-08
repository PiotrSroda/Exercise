import React, { Component } from 'react';
import '../App.css';


class User1 extends Component {


renderList() {
  const tasks = this.props.tasks
  if (tasks === ['']) {
    return <div></div>
  }
  return tasks.map((task) => {
  return(
      <li
    className="list-item">{task}
    </li>
    )
  });
  }
  render () {
    return(
    <ul className ="task-list-user1">
      {this.renderList()}
    </ul>
    )
  }
  }



  export default User1;
