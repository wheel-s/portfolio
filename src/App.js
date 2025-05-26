import {Route, Routes} from 'react-router-dom'


import Lore from './pages/lore/lore'
import Games from './pages/games.js/games'






function App() {


  
 
  return (
    <div className="App">
     
       

      <Routes>
   
    
      <Route path='/'
       element={ <Lore/>}>
      </Route>

      <Route path='/games'
       element={<Games/>}>
      </Route>





    
    </Routes>
  
    </div>
  );
}

export default App;

