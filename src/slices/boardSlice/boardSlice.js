import { createSlice, current } from '@reduxjs/toolkit'

export const boardsName = createSlice({
  name: 'boardsArray',
  initialState: {
    boards:[],
    selectedBoard:''
  },
  reducers: {
    addBoard: (state, action) => {
      const {payload} = action;
      let curr = structuredClone(current(state))
      curr.boards.push(payload);
      localStorage.setItem('boards',JSON.stringify(curr))
      return curr;
    },
    
  },
})

export default boardsName.reducer
export const {addBoard} = boardsName.actions;
