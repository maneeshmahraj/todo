
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Layout from './Layout';
import Item from './components/Item';
import Footer from './components/Footer';






const App=()=> {
  
  return (
   <>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Item/>}/> 
   <Route path='item' element={<Item/>}/>
    </Route>
</Routes>
</BrowserRouter>
<Footer/>
  </>
  );
}

export default App;
