//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddForm from './components/AddForm'
import { useState } from 'react'

function App () {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Buy Xenoblade 3',
      day: 'July 29th at 8:30 AM',
      reminder: true
    },
    {
      id: 2,
      text: 'Job Interview',
      day: 'March 15th at 11:30 AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Emulate Switch & Game Dump',
      day: 'June 7th at 10:15 PM',
      reminder: false
    }
  ])

  //Delete Task
  const deleteTask = id => {
    //console.log('delete', id)
    setTasks(tasks.filter(task => task.id !== id))
    //  tasks.forEach(element => {
    //    console.log(element.text)
    //  });
  }
  //Add Task

  //Toggle Reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddForm />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task Available'
      )}
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1> Herro from above</h1>
//   }
// }
export default App
