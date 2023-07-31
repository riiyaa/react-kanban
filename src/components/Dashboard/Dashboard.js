import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Dashboard(props) {

  const boardsItem = useSelector(state => state.boards);
  const [selectedColumns, setSelectedColumns] = useState({})

  const randomColor = () =>{
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  }

  const openTaskpopup = () => {
    props.modalFuntion('addTask');
  }
  
  useEffect(() => {
    const columnArray = boardsItem.boards.find((data)=>data.boardId==boardsItem.selectedBoard)
    setSelectedColumns(columnArray);
  }, [boardsItem]);  

  return (
    <div className=" bg-slate-200 h-full p-8">
        <div className="flex items-start">
          {
            selectedColumns?.columns?.map((data,ind)=>{
              return <div key={ind} className='flex justify-start items-center min-w-[280px] gap-2'>
                <span style={{ backgroundColor: `${randomColor()}` }} className='rounded-full w-4 h-4'></span>
                <span className='capitalize'>{data.colName}</span>
              </div>
            })
          }
     
          <label htmlFor='my_modal_6' onClick={()=> openTaskpopup()} className=' h-screen flex justify-center items-center font-bold text-2xl hover:text-primary-light transition duration-300 cursor-pointer bg-[#E9EFFA] mx-5 pt-[90px] min-w-[280px] text-[#828FA3] rounded-lg '>
            + Add Task
          </label>
        </div>
    </div>
  )
}

export default Dashboard  
