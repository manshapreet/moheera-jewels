import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';

function App() {
  


  // const connect_ref = useRef(null);


  return (


    <Routes>
        
      <Route  path="/" element={<Layout/>}>
            
              <Route 
              index element={<Home />} /> 

              
              <Route path="collection" element={<Collection/>}/>   

              {/* <Route path="search/:value" element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue} />}/> */}

      
           
      </Route>
    
    </Routes> 
  );
}

export default App;
