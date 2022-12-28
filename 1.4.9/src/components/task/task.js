import React from "react";
import './task.css';

export default class Task extends React.Component {
  state = {
    status: 'active',
  }

  setDone = () => {
    this.setState(() => {
      if (this.state.status === 'completed') {
        return {status: 'active'}
      } else {
        return {status: 'completed'}
      }
    })
  }

  render() {
    return (<li className={this.state.status}>
      <div className="view">
        <input className="toggle"
               type="checkbox"
               onInput={this.setDone}/>
        <label>
          <span className="description">{this.props.text}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"
                onClick={() => {this.props.onDelete()}}></button>
      </div>
      {this.state.status === 'editing' ? <input type="text" className="edit" value={this.props.text} /> : null}
    </li>)
  }
};