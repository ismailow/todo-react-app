import React from "react";
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns';
import './task.css';

export default class Task extends React.Component {
  id = 1000;
  static defaultProps = {
    status: 'task',
    text: 'New Task Text',
    createdDate: Date.now(),
    id: this.id++,
  };

  static propTypes = {
    text: PropTypes.string,
    status: PropTypes.string,
    createdDate: PropTypes.number,
    id: PropTypes.number,
  }

  render() {
    return (<li className={this.props.status}>
      <div className="view">
        <input className="toggle"
               type="checkbox"
               onInput={this.props.onToggleDone}/>
        <label>
          <span className="description">{this.props.text}</span>
          <span className="created">{formatDistanceToNow(this.props.createdDate)}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"
                onClick={() => {this.props.onDelete()}}></button>
      </div>
      {this.props.status === 'editing' ? <input type="text" className="edit" value={this.props.text} /> : null}
    </li>)
  }
};