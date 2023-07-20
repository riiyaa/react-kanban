import React from 'react'
import "./Navbar.scss";

import { BsTrash3Fill } from "react-icons/bs";



function Navbar(props) {

  const openPopup=(name)=>{
    props.modalFuntion(name);
  }

  return (
    <div>
      <div className="w-full  h-20 flex justify-between items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Platform Launch</h1>
        </div>
        <div className="p-4 flex items-center">
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="primaryBtn mr-3" onClick={()=> openPopup('add')} >+ Add New Board</label>
          <label htmlFor="my_modal_6" ><BsTrash3Fill className="svg-path fill-black text-[30px] text-gray-400" onClick={()=>openPopup('delete')}/></label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
