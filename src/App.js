import React, { Component } from 'react';
import _ from 'lodash';

import TaskList from './containers/task_list';
import User1 from './containers/User1';
import User2 from './containers/User2';
import User3 from './containers/User3';

export default class App extends Component {
  constructor (props) {
    super (props);

  this.state = {
    task: ['Task1','Task2','Task3','Task4','Task5','Task6','Task7','Task8','Task9','Task10','Task11','Task12','Task13','Task14','Task15'],
    user1: [],
    user2: [],
    user3: [],
  }


  }

  render() {    
    return (
      <div>
      <div className="container">
      <TaskList
      tasks = {this.state.task}
      onUser1Select = {task => this.setState({
        user1: [...this.state.user1, task],
        task: _.pull(this.state.task, task),
      })}
      onUser2Select = {task => this.setState({
        user2: [...this.state.user2, task],
        task: _.pull(this.state.task, task),
      })}
      onUser3Select = {task => this.setState({
        user3: [...this.state.user3, task],
        task: _.pull(this.state.task, task),
      })}
      />
      </div>
      <div className="rowB">
      <User2 tasks = {this.state.user2}/>
      <User1 tasks = {this.state.user1}/>
      <User3 tasks = {this.state.user3}/>
      </div>
      </div>
    );
  }
}
