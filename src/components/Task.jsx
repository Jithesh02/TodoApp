import React, { useEffect } from 'react'
import './task.css'
import { Checkbox } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Task = ({item,todolist,settodoList}) => {

    const ToggleStatus =(id) => {
        console.log(id);
    const updatedList = todolist.map((item)=> 
        item.id === id ? {...item, status: !item.status} : item
    )
    settodoList(updatedList);

    }

    const deleteTask = (id) => {
        const updateList = todolist.filter((item)=> item.id !== id);
        settodoList(updateList);
    }

  return (
    <div className='taskdiv'>
    <div className={`${item.status ? 'completextDiv': 'incompletextDiv'}` }>

        <div className='text'onClick={()=>ToggleStatus(item.id)}>
            <Checkbox 
             
             checked={item.status}/> 
            <div className='textfield'>{item.task}</div>
        </div>
        <div className='deleteIcon'>
         <DeleteForeverIcon onClick={()=> deleteTask(item.id)}/>
         </div>
        </div>
        </div>
  )
}

export default Task