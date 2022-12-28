import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import TaskList from "./components/taskList";
import Footer from "./components/footer";
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

class App extends React.Component{
  state = {
    todoData: [
      {label: 'Learn React', id: 1},
      {label: 'Dink coffee', id: 2},
      {label: 'Create app', id: 3},
    ]
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

  render() {
    return (
      <section className='todoapp'>
        <Header />
        <section className='main'>
          <TaskList todos={this.state.todoData} onDelete={this.deleteTask}/>
          <Footer/>
        </section>
      </section>
    );
  };
}

root.render(<App />);