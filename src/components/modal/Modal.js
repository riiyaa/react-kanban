import React from "react";
import "./Modal.scss";
import { VscClose } from "react-icons/vsc";


function Modal(props) {


    console.log(props);

    
  return (
    <>
    { props.modal == 'add' && (
        <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h1 className="font-bold text-2xl">Create New Board</h1>
            <p className="py-4">Enter Board Name : </p>
            <input
              type="text"
              placeholder="Board Name"
              className="input border-slate-500 w-full"
              onChange={(e) => {}}
            />


            <div className="flex items-center justify-between gap-4 py-2">
                <input
                    type="text"
                    placeholder="Board Name"
                    className="input border-slate-500 w-full flex-1 h-9 outline-none"
                    onChange={(event) => {}}
                />
                <label className=" py-1 px-3" onClick={()=>{}}> <VscClose className="text-2xl stroke-1 cursor-pointer" /></label>
            </div>

            <div className="modal-action flex justify-between">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
              <label className="btn bg-slate-400">Submit</label>
            </div>
          </div>
        </div>
      </div>
    )}
    { props.modal == 'delete' && (
        <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h1 className="font-bold text-2xl">Delete your board</h1>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <select className="select select-bordered" defaultValue={'DEFAULT'} onChange={(event)=>{}}>
                  <option value="DEFAULT" disabled>
                    Pick one
                  </option>
                  {/* {boards.map((it,index) => (
                    <option key={index}>{it.name}</option>
                  ))} */}
                </select>
            <div className="modal-action flex justify-between">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
              <label className="btn bg-slate-400">Submit</label>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Modal;
