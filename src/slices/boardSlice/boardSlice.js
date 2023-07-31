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

    selectBoardId:(state,action)=>{
      const {payload}=action;
      let curr = structuredClone(current(state));
      curr.selectedBoard = payload;
      localStorage.setItem('boards',JSON.stringify(curr));
      return curr
    },

    deleteOneBoard:(state,action)=>{
      const {payload} = action;
      let curr = structuredClone(current(state));
      curr.boards = curr.boards.filter((data)=>data.boardId != payload);
      localStorage.setItem('boards',JSON.stringify(curr));
      return curr
    },

    updateBoard:(state,action)=>{
      const {payload} = action;
      let curr = structuredClone(current(state));
      const i = curr.boards.findIndex((data)=> data.boardId == payload.boardId);
      curr.boards[i] = payload
      localStorage.setItem('boards',JSON.stringify(curr));
      return curr
    },

    initializeState:(state,action)=>{
      const {payload} = action;
      return payload
    }
    
  },
})

export default boardsName.reducer
export const {addBoard,selectBoardId,deleteOneBoard,updateBoard,initializeState} = boardsName.actions;
