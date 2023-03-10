import { createSlice } from '@reduxjs/toolkit'

const initialState = [{id:1 , title:"Task1" , isDone:false} , {id:2 , title:"Task2" , isDone:false}]

export const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
      addTask:(state , action) =>{
      state=state.push(action.payload)
    },

      deleteTask:(state , action) => {
        return state.filter((el)=> el.id !== action.payload.id)
   },
   editTask:(state , action) => {
    console.log(action.payload)
    return state.map(el =>el.id === action.payload.id ? action.payload : el)
   }
    
  },
})

// Action creators are generated for each case reducer function
export const {addTask , deleteTask , editTask} = taskSlice.actions

export default taskSlice.reducer