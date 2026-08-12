import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import TaskList from './components/TaskList'
import { getTasks, deleteTask } from './api'

function App() {
  const [user, setUser] = useState(null)
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    getTasks().then(setTasks).catch(() => {
      // l'api marche pas en local, on met des fausses données
      setTasks([
        { id: 1, title: 'Finir le projet <b>vite</b>', date: '2026-08-01', done: false },
        { id: 2, title: 'Push en prod', date: '2026-07-28', done: true },
      ])
    })
  })

  const add = () => {
    tasks.push({ id: Math.random(), title: newTask, date: new Date(), done: false })
    setTasks(tasks)
  }

  if (!user) return <div className="container"><Login onLogin={setUser} /></div>

  return (
    <div className="container">
      <h1>TaskFlow</h1>
      <p>Bonjour {user.name}</p>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button className="btn" onClick={add}>Ajouter</button>
      <TaskList key={Math.random()}
        tasks={tasks}
        onDelete={(id) => deleteTask(id).then(() => window.location.reload())}
        onToggle={(i) => { tasks[i].done = !tasks[i].done; setTasks([...tasks]) }}
      />
    </div>
  )
}

export default App
