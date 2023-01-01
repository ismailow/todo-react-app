import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import TaskList from "./components/taskList";
import Footer from "./components/footer";
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

class App extends React.Component{
  id = 10;
  state = {
    todoData: [
      {label: 'Learn React', status: 'task', createdDate: Date.now(), id: 1},
      {label: 'Dink coffee', status: 'task', createdDate: Date.now(), id: 2},
      {label: 'Create app', status: 'task', createdDate: Date.now(), id: 3},
    ],
    filter: 'all'
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      status: 'task',
      createdDate: Date.now(),
      id: this.id++,
    };
    this.setState(({todoData}) => {
      const newTodoData = [newItem, ...todoData];
      return {
        todoData: newTodoData
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex(item => item.id === id);
      const oldItem = todoData[index];
      const newValue = oldItem.status === 'task' ? 'completed' : 'task';
      const newItem = {...oldItem, status: newValue};
      const newTodoData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return {
        todoData: newTodoData
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex(item => item.id === id);
      const newTodoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
      return {
        todoData: newTodoData
      }
    })
  };

  onClearCompleted = () => {
    this.setState(({todoData}) => {
      const newTodoData = todoData.filter(item => item.status !== 'completed');
      return {
        todoData: newTodoData
      }
    })
  };

  filter(items, filter) {
    switch (filter) {
      case 'all': {
        return items;
      }
      case 'active': {
        return items.filter(item => item.status === 'task');
      }
      case 'completed': {
        return items.filter(item => item.status === 'completed');
      }
      default: {
        return items;
      }
    }
  };

  onFilterChange = (filter) => {
    this.setState({filter: filter});
  }

  render() {
    const tasksCount = this.state.todoData.filter(item => item.status === 'task').length;
    const visibleItems = this.filter(this.state.todoData, this.state.filter);
    return (
      <section className='todoapp'>
        <Header onAddTask={this.addItem}/>
        <section className='main'>
          <TaskList todos={visibleItems}
                    onDelete={this.deleteTask}
                    onToggleDone={this.onToggleDone}/>
          <Footer tasksCount={tasksCount}
                  onClearCompleted={this.onClearCompleted}
                  filter={this.state.filter}
                  onFilterChange={this.onFilterChange}/>
        </section>
      </section>
    );
  };
}

root.render(<App />);