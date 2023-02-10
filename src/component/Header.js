import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/task/taskSlice";
import "../App.css"
const Header =() =>{
    const [newTask , setNewTask] = useState({title:""});
    const dispatch=useDispatch()
    return(
        <div className="header">
            <input type="text" placeholder='TODO content' onChange={(e) => setNewTask({...newTask , title:e.traget.value})} />
            <button onClick={() => dispatch(addTask({... newTask ,  isDone:false ,
            id:Math.floor(Math.random()*100000)
            }))}>ADD</button>
        </div>
    )
}

export default Header;