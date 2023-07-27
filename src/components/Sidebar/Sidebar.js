import React, { useEffect } from 'react';
import "./Sidebar.scss"
import logo from '../../assets/logo-mobile.svg'
import { useDispatch, useSelector } from 'react-redux';
import { VscExtensions } from "react-icons/vsc";
import { selectBoardId } from '../../slices/boardSlice/boardSlice';



function Sidebar() {

  const boardsItem  = useSelector((state) => state.boards);
  const dispatch = useDispatch();

  const selectItem = (id) => {
    dispatch(selectBoardId(id))
  }
  

  return (
    <>
      <div className="w-1/4 rounded-tr-xl rounded-br-xl h-screen">
      <div className="">
        <div className="flex items-center gap-1 mb-10 p-4">
          <img src={logo} alt=" Logo " ></img>
          <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">kanban</h3>
        </div>
        <h2 className="font-bold py-4 px-8"> ALL BOARDS </h2>
          {boardsItem?.boards?.map((it, index) => {
            return <div onClick={()=>selectItem(it.boardId)} key={index} className={`cursor-pointer rounded-r-2xl py-3 pl-8 pr-2 mr-5 my-2 hover:bg-gray-200 hover:text-primary-light  flex items-center ${(it.boardId==boardsItem.selectedBoard) ? 'primaryBgColor text-white' : ''}`}>
                  <div className="px-4 py-1"><VscExtensions style={{ fontSize: "20px", color: "grey" }} className="svg-path fill-gray-600" /></div>
                  <div><h2 className="w-24 h-6 text-ellipsis overflow-hidden font-bold">{it.boardName}</h2></div>
              </div>
          })}
          <div className="cursor-pointer rounded-r-2xl py-3 pl-8 pr-2 mr-5 my-2 text-primary-light hover:bg-slate-200 flex items-center">
            <div className="px-4 py-1"><VscExtensions style={{ fontSize: "20px", color: "grey" }} className="svg-path fill-gray-600" /></div>
            <div><h2 className="w-30 h-6 text-ellipsis overflow-hidden font-bold">Create Column</h2></div>
          </div>
      </div>  
    </div> 
    </>
  )
}

export default Sidebar
