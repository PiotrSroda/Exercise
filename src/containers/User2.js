import React, { Component } from 'react';

import '../App.css';


class User2 extends Component {
renderList() {
  if (!this.props.task) {
    return <div></div>
  }
  return this.props.task.map((task) => {
  return(
      <li
    className="list-item">{task.name}
    </li>
    )
  });
  }
  render () {
    return(
    <ul className ="task-list-user2">
      {this.renderList()}
    </ul>
    )
  }
  }



  export default User2;