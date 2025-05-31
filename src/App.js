import {Route, Routes} from 'react-router-dom'


import Lore from './pages/lore/lore'







function App() {


  
 
  return (
    <div className="App">
     
       

      <Routes>
   
    
      <Route path='/'
       element={ <Lore/>}>
      </Route>

     





    
    </Routes>
  
    </div>
  );
}

export default App;

