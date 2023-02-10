import React from "react";
import { useSelector, useStore } from "react-redux";
import { store}   from "../redux/store";
import Task from"./Task";
import "../App.css"


const TaskList =() =>{
  const tasks=useSelector((store)=>store.task)
  console.log(tasks)
    return(
        <div className="tasklist">
         {tasks.map((task , i) => <Task key ={i} task={task}/>)}
        </div>
    )
}

export default TaskList;