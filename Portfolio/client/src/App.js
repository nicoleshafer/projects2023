import './App.css';
import Body from "./components/Body"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Projects  from "./components/Projects.js"
import Contact from "./components/Contact.js"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/skills' element={<Skills />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
