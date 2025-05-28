import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoSearchbar from './components/TodoSearchbar'
import TodoList from './components/TodoList'
import axios from 'axios'

function App() {
  const [todolist,settodoList] = useState([]);

  useEffect(()=>{
    fetchTodos();
  },[])

  
  const fetchTodos =async()=>{
    try{
    const response = await axios.get('http://localhost:8080/api/todos');
    console.log(response);
    settodoList(response.data);
    }catch(error){
      console.log("Failed to get data",error);
    }
  }
  
  return (
    <>
      <div className='container'>
        <div className='Todo'>
          <TodoSearchbar todolist={todolist} settodoList={settodoList} fetchTodos={fetchTodos}/>
          <TodoList todolist={todolist} settodoList={settodoList} fetchTodos={fetchTodos}/>
        </div>
      </div>
    </>
  )
}

export default App
