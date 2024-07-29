import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/AppNavbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;