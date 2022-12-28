import React from "react";
import TasksFilter from "../tasksFilter";
import './footer.css';

const Footer = () => {
  return (<footer className='footer'>
    <span className="todo-count">1 items left</span>
    <TasksFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>)
};

export default Footer;