
import './App.css';
import React from 'react';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './page/Home';
import Reserver from './page/Reserver';
import Requetes from './page/Requetes';
import Contacts from './page/Contacts';


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/reserver" element={<Reserver/>} />
     <Route path="/contacts" element={<Contacts/>} />
     <Route path="/requetes" element={<Requetes/>} />

   </Routes>
   </BrowserRouter>
  );
};
export default App;
