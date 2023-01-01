import React from "react";
import NewTaskForm from "../newTaskForm";

const Header = (props) => {
  return (<header className='header'>
    <h1>todos</h1>
    <NewTaskForm onAddTask={props.onAddTask}/>
  </header>);
};

export default Header;