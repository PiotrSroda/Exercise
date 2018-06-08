import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

  }


  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }


  onUser1Click(task) {
    this.props.onUser1Select(task);
  }
  onUser2Click(task) {
    this.props.onUser2Select(task);
  }
  onUser3Click(task) {
    this.props.onUser3Select(task);
  }
  render() {
    return (
      <div>
        <div onClick={this.showMenu} className="btn-nam">
        <div className = "buttonName">◄</div>
        </div>

        {
          this.state.showMenu
            ? (
              <div className ="menu"

                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              > <button  onClick= {event => this.onUser1Click(this.props.task)} className="btn btn-primary btn-sm">User 1 </button>
                <button  onClick= {event => this.onUser2Click(this.props.task)} className="btn btn-primary btn-sm">User 2 </button>
                <button  onClick= {event => this.onUser3Click(this.props.task)} className="btn btn-primary btn-sm">User 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Button;
