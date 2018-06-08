import React, { Component } from 'react';

import '../App.css';


class User2 extends Component {
  renderList() {
    const tasks = this.props.tasks
    if (tasks === ['']) {
      return <div></div>
    }
    return tasks.map((task) => {
    return(
        <li
      key={task}
      className="list-item text-white bg-dark">{task}
      </li>
      )
    });
    }
    render () {
      return(
      <ul className ="task-list-user2 border border-white ">
        {this.renderList()}
        <div className="podiumNumber text-white">
          2
        </div>
      </ul>
      )
    }
    }



  export default User2;
