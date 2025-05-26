import React, { useEffect } from 'react'
import Task from './Task'
import './TodoList.css'

const TodoList = ({todolist, settodoList}) => {

    useEffect(()=>{
        console.log(todolist, 'hi')
    },[todolist])

  return (
    <div className='TodoList'>
       {todolist.map((item)=> (
        <Task key={item.id} item={item} settodoList={settodoList} todolist={todolist}/>
       ))}
    </div>
  )
}

export default TodoList