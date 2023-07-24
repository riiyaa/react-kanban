import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import { useState,useEffect } from 'react';
import Modal from './components/modal/Modal';


function App() {

  const [isModal, setIsModal] = useState('');

  useEffect(() => {
  }, [isModal])
  


  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar modal={isModal} modalFuntion={setIsModal}/>
        <Dashboard/>
        <Modal modal={isModal} modalFuntion={setIsModal} />
      </div>
    </div>
  );
}

export default App;
