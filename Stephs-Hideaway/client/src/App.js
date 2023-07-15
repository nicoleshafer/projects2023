import './App.css';
import logo from "./images/logo.png"


function App() {
  return (
    <div className="App">
      <div className="navContainer">
        <div className="navBar">
        
            <button>Home</button>
            <button>Stay with us</button>
            <button>About us</button>
          
        </div>
      </div>
      <div className="bodyContainer">
          <div className="inside-body">
            <div>
              Welcome to Stephanies Coastal Oasis.
              
            </div>
            <div className="logo">
              <img src={logo} alt="logo" className='logo'></img>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
