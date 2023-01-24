
import Containe from './Containe'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  function Header(){
    return <p style={{fontSize: 30,padding: 0,margin: 0,backgroundColor: "whitesmoke",
    padding: 30,}}>Axelor POS</p>
}
  return (
    <div>
      
  
        <Header/>
        <Containe/>
        
      
   
       </div>
  );
}

export default App;
