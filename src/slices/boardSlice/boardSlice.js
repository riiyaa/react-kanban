import { createSlice } from '@reduxjs/toolkit'

export const boardsName = createSlice({
  name: 'boardsArray',
  initialState: {
    boards:[],
    selectedBoard:''
  },
  reducers: {
    addBoard: (state, action) => {
        const {payload} = action;
      return [...payload];
    },
    
  },
})

export default boardsName.reducer
export const {addBoard} = boardsName.actions;
