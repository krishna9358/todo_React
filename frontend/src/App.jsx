import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todo, setTodo] = useState([])

    fetch("http://localhost:3000/")
      .then(async function (res) {
        const json = await res.json();
        setTodo(json.todos);
      })


  return (
    <>
      <CreateTodo />
      <Todos todos={todo} />
    </>
  )
}

export default App
