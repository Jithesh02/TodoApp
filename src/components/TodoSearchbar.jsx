import React, { useState } from 'react'
import './TodoSearchBar.css'
const TodoSearchbar = ({settodoList, todolist}) => {

    const [searchBar,setSearchBar] = useState('')

    const handleInputChange = (e)=> {
        setSearchBar(e.target.value)
    }
    const onSubmit = (e)=>{
            e.preventDefault();
            if (searchBar.trim() === '') return;
            const newTask = {
                id: Date.now(),
                task: searchBar,
                status: false,
            }
            settodoList([...todolist,newTask])
            setSearchBar('');
            console.log(todolist);
    }
    
  return (
    <div className='todoheader'>
        <div className='inputBarDiv'>
            <input className='inputbar' type = 'text' value={searchBar} onChange={handleInputChange} placeholder="Enter a task"/>
        </div>
        <div className='buttonDiv'>
            <button className='addbtn' onClick={onSubmit}>ADD TASK</button>
        </div>
    </div>
  )
}

export default TodoSearchbar