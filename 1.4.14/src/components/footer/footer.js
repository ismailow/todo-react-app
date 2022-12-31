import React from "react";
import TasksFilter from "../tasksFilter";
import './footer.css';

const Footer = (props) => {
  return (<footer className='footer'>
    <span className="todo-count">{props.tasksCount} items left</span>
    <TasksFilter onFilterChange={props.onFilterChange}
                 filter={props.filter}/>
    <button className="clear-completed"
            onClick={props.onClearCompleted}>Clear completed</button>
  </footer>)
};

export default Footer;