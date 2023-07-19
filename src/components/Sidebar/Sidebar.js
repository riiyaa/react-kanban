import React from 'react';
import "./Sidebar.scss"
import logo from '../../assets/logo-mobile.svg'


function Sidebar() {
  return (
    <>
      <div className="w-1/4 rounded-tr-xl rounded-br-xl h-screen">
      <div className="">
        <div className="flex items-center gap-1 mb-10 p-4">
          <img src={logo} alt=" Logo " ></img>
          <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">kanban</h3>
        </div>
        <h2 className="font-bold py-4 px-8"> ALL BOARDS </h2>
          {/* {boards.map((it, index) => {
            return <div onClick={()=>selectItem(index)} key={index} className={`cursor-pointer py-2 pl-8 pr-2 mr-5 my-2 bg-purple-400 background1 border-radius20 flex items-center ${(boards.findIndex((x)=>x.name==boardName) == index) ? 'active' : ''}`}>
                <div className="px-4 py-1"><VscExtensions style={{ fontSize: "20px", color: "grey" }} className="svg-path fill-gray-600" /></div>
                <div><h2 className="w-20 h-6 text-ellipsis overflow-hidden font-bold" key={index} >{it.name}</h2></div>
              </div>
          })} */}
      </div>  
    </div> 
    </>
  )
}

export default Sidebar
