import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular';
import About from './components/About';
import Contact from './components/Contact';
import Review from './components/Review';
import KingsCross from './places/KingsCross';
import London from './places/London';
import MyPlaces from './components/MyPlaces';
import Hogsmeade from './places/Hogsmeade';
import DiagonAlley from './places/DiagonAlley'
import HogwartsExpress from "./places/HogwartsExpress"
import Hogwarts from './places/Hogwarts';
import UK from './places/UK';
import MyPlacesDisplay from './components/MyPlacesDisplay';
import AllReviews from './components/AllReviews';



function App() {
  // const [path, setPath] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='MyPlacesDisplay/:id' element={<MyPlacesDisplay />} />
          <Route path='/myplaces' element={<MyPlaces />} />
          <Route path='/kingscross' element={<KingsCross />} />
          <Route path='/London' element={<London />} />
          <Route path='/hogsmeade' element={<Hogsmeade />} />
          <Route path='/diagonalley' element={<DiagonAlley />} />
          <Route path='/hogwartsexpress' element={<HogwartsExpress />} />
          <Route path='/hogwarts' element={<Hogwarts />} />
          <Route path='/other-locations' element={<UK />} />
          <Route path='/reviews' element={<AllReviews />} />
        


        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;




