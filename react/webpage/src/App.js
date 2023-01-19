import Login from './Login'
import Home from './Home'
import Contact  from './Contact';
import About from './About';
import Protected from './Protected';


 import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './App.css';

function App() {
  
  
  return (
    <div className="App">
    
    <BrowserRouter>
    
     <Link to='/'>Home  </Link>
     <Link to='/Login'>Login </Link>
     <Link to='/Contact'>Contact </Link>
     <Link to='/About'>About </Link>

     <Routes>
     <Route path='/' element={<Protected Component={Home}/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/Contact' element={<Contact/>}></Route>
     <Route path='/About' element={<About/>}></Route>
    </Routes>
      
     
   
  </BrowserRouter>
   
    
     
    </div>
  );
}

export default App;
