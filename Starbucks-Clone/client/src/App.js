import './App.css';
import Nav from "./components/Nav"
import Body from "./components/Body"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            {/* <Route path="/menu" element={<Menu/>}></Route> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
