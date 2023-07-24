import { configureStore } from '@reduxjs/toolkit'
import  boardsName  from './boardSlice/boardSlice'

export default configureStore({
  reducer: {
    boards: boardsName,
  },
})
