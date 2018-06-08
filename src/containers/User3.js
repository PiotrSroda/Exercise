import React, { Component } from 'react';

import '../App.css';


class User3 extends Component {
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
      <ul className ="task-list-user3">
        {this.renderList()}
        <div className="podiumNumber text-white">
          3
        </div>
      </ul>

      )
    }
    }



  export default User3;
