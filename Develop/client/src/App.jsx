import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';  // Update the import

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
