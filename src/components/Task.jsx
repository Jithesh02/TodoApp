import React, { useEffect } from 'react'
import './task.css'
import { Checkbox } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const Task = ({item,todolist,settodoList,fetchTodos}) => {
    const ToggleStatus = async () => {
        const updatedItem = { ...item, completed: !item.completed };
    
        // 1. Update UI immediately
        const updatedList = todolist.map(todo =>
          todo.id === item.id ? updatedItem : todo
        );
        settodoList(updatedList);
    
        // 2. Update backend
        try {
          await axios.put(`http://localhost:8080/api/todos/${item.id}`, updatedItem);
        } catch (error) {
          console.log('Toggle failed', error);
        }
      };

    const deleteTask = async (id) => {
        try{
        const response = await axios.delete(`http://localhost:8080/api/todos/${id}`)
        item = response.data;
        console.log(item,'updated');
        fetchTodos();
        }
        catch(error ){
            console.log('delete Failed', error);
        }
    }

  return (
    <div className='taskdiv'>
    <div className={`${item?.completed ? 'completextDiv': 'incompletextDiv'}` }>

        <div className='text'onClick={()=>ToggleStatus(item.id)}>
            <Checkbox 
             
             checked={item?.completed}/> 
            <div className='textfield'>{item?.title}</div>
        </div>
        <div className='deleteIcon'>
         <DeleteForeverIcon onClick={()=> deleteTask(item?.id)}/>
         </div>
        </div>
        </div>
  )
}

export default Task