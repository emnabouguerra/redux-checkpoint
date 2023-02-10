import { configureStore } from '@reduxjs/toolkit';
import taskreducer from "./task/taskSlice"

export const store = configureStore({
  reducer: {task:taskreducer},
})