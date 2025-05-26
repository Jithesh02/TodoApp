import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoSearchbar from './components/TodoSearchbar'
import TodoList from './components/TodoList'

function App() {
  const [todolist,settodoList] = useState([]);
  return (
    <>
      <div className='container'>
        <div className='Todo'>
          <TodoSearchbar todolist={todolist} settodoList={settodoList}/>
          <TodoList todolist={todolist} settodoList={settodoList}/>
        </div>
      </div>
    </>
  )
}

export default App
