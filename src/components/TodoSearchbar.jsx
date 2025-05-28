import React, { useState } from 'react'
import './TodoSearchBar.css'
import axios from 'axios'
const TodoSearchbar = ({settodoList, todolist,fetchTodos}) => {

    const [searchBar,setSearchBar] = useState('')

    const handleInputChange = (e)=> {
        setSearchBar(e.target.value)
    }
    const onSubmit = async (e)=>{
            e.preventDefault();
            if (searchBar.trim() === '') return;
            const newTask = {
                title: searchBar,
                completed: false,
            }
            
            try{
                const response = await axios.post('http://localhost:8080/api/todos',newTask)
                console.log('task added succesfully',response);
                fetchTodos();
            } catch(error){
                console.log('Post Failed',error)
            }
            
            setSearchBar('');
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