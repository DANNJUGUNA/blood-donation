import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home'
import Aboutus from './pages/about/Aboutus'
import DashBoard from './pages/dashboard/DashBoard'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path='/about' element={<Aboutus/>}/>
                 <Route path='/dashboard' element={<DashBoard/>}/>
                 <Route path='/signup' element={<SignUp/>}/>
                 <Route path='/login' element={<Login/>}/>
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
