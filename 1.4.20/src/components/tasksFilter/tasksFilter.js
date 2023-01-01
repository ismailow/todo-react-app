import React from "react";
import './tasksFilter.css'

export default class TasksFilter extends React.Component{
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'},
  ];
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = this.props.filter === name;
      return (<li key={name}>
                <button className={isActive ? 'selected' : null}
                        onClick={() => this.props.onFilterChange(name)}>{label}</button>
              </li>);
    })
    return (<ul className="filters">
              {buttons}
            </ul>);
  }
};