import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Modal.scss";
import { VscClose } from "react-icons/vsc";
import { addBoard } from "../../slices/boardSlice/boardSlice";

function Modal(props) {

  const dispatch = useDispatch();
  const initialStatus = {
    boardName:'BOARD',
    boardId:Math.floor(Math.random() * 10000000),
    columns:[
      {
        colName: "Todo",
        colId: Math.floor(Math.random() * 10000000),
      },
    ]
  }

  const [array, setArray] = useState(initialStatus);

  const changeName = (e) => {
    setArray(prev => ({...prev,boardName:e.target.value}))
  }

  const changeColName = (e, i) => {
    let val = structuredClone(array);
    val.columns[i].colName = e.target.value
    setArray(val)
  };

  const addCol = () => {
    const val = structuredClone(array);
    val.columns.push({
      colName: "ABC",
      colId: Math.floor(Math.random() * 10000000),
    })
    setArray(val);
  };

  const delCol = (id) => {
    const val = structuredClone(array);
    setArray((prev) => ({...prev,columns:val.columns.filter((item, index) => item.colId !== id)}));
  };

  const submit = () => {
    dispatch(addBoard(array))
    setArray(initialStatus)
    props.modalFuntion('')
  }

  

  return (
    <>
      {props.modal == "add" && (
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
                value={array.boardName}
                onChange={(e) => changeName(e)}
              />
              <br />
              <br />

              {array.columns.map((data, index) => {
                return (
                  <div
                    className="flex items-center justify-between gap-4 py-2"
                    key={index}
                  >
                    <input
                      type="text"
                      placeholder="Board Name"
                      className="input border-slate-500 w-full flex-1 h-9 outline-none"
                      value={data.colName}
                      onChange={(event) => changeColName(event, index)}
                    />
                    <label
                      className=" py-1 px-3"
                      onClick={() => delCol(data.colId)}
                    >
                      {" "}
                      <VscClose className="text-2xl stroke-1 cursor-pointer" />
                    </label>
                  </div>
                );
              })}

              <br />
              <br />
              <div className="primaryBtn text-center" onClick={() => addCol()}>
                +Add New Column
              </div>

              <div className="modal-action flex justify-between">
                <label htmlFor="my_modal_6" className="btn" onClick={() => setArray(initialStatus)}>
                  Close!
                </label>
                <label className="btn bg-slate-400" onClick={()=>submit()}>Submit</label>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.modal == "delete" && (
        <div>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h1 className="font-bold text-2xl">Delete your board</h1>
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <select
                className="select select-bordered"
                defaultValue={"DEFAULT"}
                onChange={(event) => {}}
              >
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
