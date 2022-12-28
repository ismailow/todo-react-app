import React from "react";
import Task from "../task";
import './taskList.css';

const TaskList = (props) => {
  const elements = props.todos.map(item => {
    return <Task
      key={item.id}
      text={item.label}
      status={item.status}
      onDelete={() => props.onDelete(item.id)}/>
  })
  return (<ul className='todo-list'>
    {elements}
  </ul>)
};

export default TaskList;