import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
