import './App.css';
import { Routes,Route, Outlet } from 'react-router-dom'
import Layout from './components/layout';
import Navbar from './components/navigation/Navbar';



function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
     
    </div>
  )
}

export default App;


