import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todos } from './Todos'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
            title: "hello",
            description : "jlafla",
            completed: false,
      }]}></Todos>
    </div>

      
    </>
  )
}

export default App
