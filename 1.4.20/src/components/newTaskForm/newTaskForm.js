import React from "react";
import './newTaskForm.css'

export default class NewTaskForm extends React.Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState(() => {
      return {
        label: e.target.value
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.state.label);
    this.setState({label: ''});
  };

  render() {
    return (<form onSubmit={this.onSubmit}>
      <input className="new-todo"
             placeholder="What needs to be done?"
             onChange={this.onLabelChange}
             value={this.state.label}
             autoFocus
      />
    </form>);
  }
}