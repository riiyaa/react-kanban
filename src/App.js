import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import { useState,useEffect } from 'react';
import Modal from './components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { initializeState } from './slices/boardSlice/boardSlice';


function App() {

  const [isModal, setIsModal] = useState('');
  // const initialStatus = {
  //   boardName:'BOARD',
  //   boardId:Math.floor(Math.random() * 10000000),
  //   columns:[
  //     {
  //       colName: "Todo",
  //       colId: Math.floor(Math.random() * 10000000),
  //     },
  //   ]
  // }

  // const [modalArray, setModalArray] = useState(initialStatus)
  const dispatch = useDispatch();
  // const boardsItem = useSelector(state => state.boards);

  useEffect(() => {
    if(localStorage.getItem('boards')){
      dispatch(initializeState(JSON.parse(localStorage.getItem('boards'))));
    }
  }, []);

  // useEffect(() => {
  //   console.log(isModal);
  //   if(isModal=='add'){
  //     setModalArray(initialStatus)
  //   }else if(isModal=='delete'){

  //   }else if(isModal=='addColumn'){
  //     let current = structuredClone(boardsItem);
  //     current = current.boards.find((data)=>data.boardId==current.selectedBoard);
  //     setModalArray(current)
  //   }
  // }, [isModal])
  
  


  return (
    <div className='flex flex-row'>
      <Sidebar modal={isModal} modalFuntion={setIsModal} />
      <div className='flex flex-col w-full'>
        <Navbar modal={isModal} modalFuntion={setIsModal}/>
        <Dashboard modal={isModal} modalFuntion={setIsModal} />
        <Modal modal={isModal} modalFuntion={setIsModal} />
      </div>
    </div>
  );
}

export default App;
