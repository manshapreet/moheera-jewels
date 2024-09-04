import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import OurStory from './components/OurStory/OurStory';
import Bespoke from './components/Home/Bespoke/Bespoke';
import CustomEngRings from './components/Home/CustomEngRings/CustomEngRings';

function App() {



  // const connect_ref = useRef(null);


  return (

    <ShoppingCartProvider>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route
            index element={<Home />} />

          <Route path="ourstory" element={<OurStory />} />
          <Route path="collection" element={<Collection />} />
          <Route path="bespokeprocess" element={<Bespoke />} />
          <Route path="customengagementrings" element={<CustomEngRings />} />

          {/* <Route path="search/:value" element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue} />}/> */}



        </Route>

      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
