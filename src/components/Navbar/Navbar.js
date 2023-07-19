import React from 'react'
import "./Navbar.scss";

import { BsTrash3Fill } from "react-icons/bs";


function Navbar() {
  return (
    <div>
      <div className="w-full  h-20 flex justify-between items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Platform Launch</h1>
        </div>
        <div className="p-4 flex items-center">
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="py-2 px-4 text-xl font-bold background cursor-pointer mr-3" >+ Add New Board</label>
          <label htmlFor="my_modal_6" ><BsTrash3Fill style={{ fontSize: "30px", color: "grey" }} className="svg-path fill-black"/></label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
