import './App.css';
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { PizzaPage } from './pages/PizzaPage';
import { UserPage } from './pages/UserPage';
import Navbar from './components/navigation/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/pizza' element={<PizzaPage />} />
      <Route path='/user' element={<UserPage />} />
     </Routes>
    </div>
  )
}

export default App;


