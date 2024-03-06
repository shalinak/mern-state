import {BrowserRouter,Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import SignUp from './Components/SignUp';
import About from './Components/About';
import Profile from './Components/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/sign-in' element={<Signin/>}/> 
      <Route path='/sign-up' element={<SignUp/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
    </Routes>
    </BrowserRouter>
  )
}
