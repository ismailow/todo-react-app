import React from "react";
import './task.css';

export default class Task extends React.Component {
  render() {
    return (<li className={this.props.status}>
      <div className="view">
        <input className="toggle"
               type="checkbox"
               onInput={this.props.onToggleDone}/>
        <label>
          <span className="description">{this.props.text}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"
                onClick={() => {this.props.onDelete()}}></button>
      </div>
      {this.props.status === 'editing' ? <input type="text" className="edit" value={this.props.text} /> : null}
    </li>)
  }
};