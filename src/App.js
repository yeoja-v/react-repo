import './App.css';
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { PizzaPage } from './pages/PizzaPage';
import { UserPage } from './pages/UserPage';
import Navbar from './components/navigation/Navbar';
import Layout from './components/layout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/pizza' element={<PizzaPage />} />
      <Route path='/user' element={<UserPage />} />
      
    <Route path='/auth' >
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
    </Route>
      
     </Routes>
      </Layout>
     
    </div>
  )
}

export default App;


