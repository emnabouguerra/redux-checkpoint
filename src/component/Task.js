import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/task/taskSlice";
import "../App.css"

const Task = ({task}) =>{
    const dispatch=useDispatch()
    const [onUpdate , setOnUpdate] =useState(false) ;
    const [newTask , setNewTask] =useState({task});
    return(
        <div  
        className={task.isDone ? 'done' : "notdone"}
        onClick={()=> dispatch(editTask({... newTask, isDone:!newTask.isDone}))}>
        
            {onUpdate 
            ? <>  <input type={"text"} defaultvalue={task.title}  onChange={(e)=> setNewTask({...newTask , title:e.traget.value})} /> 
                  <button onClick={() => dispatch(editTask(newTask))}>confirme</button>
                  <button onClick={()=> setOnUpdate(false)}>cancel</button>
                  </>
               :<><h3>{task.title}</h3>
        <button>Update</button>
        <button onClick={()=>dispatch(deleteTask(task))}>X</button>
        </>
        }
        </div>



    )
}

export default Task ;