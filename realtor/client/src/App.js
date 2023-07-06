import './App.css';
import logo from "./img/logo.png"
import beachfront from "./img/beachfront.webp"
import home from "./img/home.jpeg"
import patio from "./img/patio.webp"
import stephanie from "./img/stephanie.jpg"
function App() {
  return (
    <div className="App">
      <div className="navBarContainer">
          <button>
            Home
          </button>
          <button>
            About Me
          </button>
          <img src={logo} alt="website logo"  className="logoPhoto"></img>
          <button>
            Contact Me
          </button>
          <button>My Work</button>
      </div>
      <div className="photo-row">
        <img src={beachfront} alt="beachfront property" className="beachfront"></img>
        <img src={home} alt="waterfront home"></img>
        <img src={patio} alt="patio"></img>
      </div>


      <div>
        <h2> Escape, Relax, Repeat: Vacation Homes Made Easy</h2>

      </div>


        <div className="spacing"></div>

      <div>
        <div className="about-me">
          <div>
          <p>
          Hello, I'm Stephanie! Your dedicated sales agent specializing in 
          <br/><span className="italics"> beach home rentals. </span>
          <br/>
          <br/>With a passion for connecting people with their ideal living spaces,
          I am committed to helping you find the perfect vacation home 
          that meets your needs and exceeds your expectations.
          I possess in-depth knowledge of the local market and a 
          keen understanding of the evolving rental landscape. 
          Whether you're searching for a cozy apartment, a charming suburban house, or a luxurious vacation villa, I am here to guide you every step of the way.

          My goal is to ensure a seamless and stress-free rental experience for both tenants and property owners alike. I take pride in offering personalized service, carefully listening to your requirements, and diligently matching you with suitable rental options. From initial property viewings to lease negotiations, I will be your trusted advisor, providing expert guidance and support throughout the process.

          I believe that finding the perfect home is not just about the physical space; it's about discovering a place where you can truly thrive and feel a sense of belonging. By leveraging my expertise and vast network, I strive to make your rental journey an exciting and rewarding one.

          I look forward to working with you and being your trusted partner in finding the ideal vacation rental. Contact me today, and together we'll embark on an exciting adventure to find the perfect place that you can call home.
          </p>
          </div>
          <div>
            <img src={stephanie} alt="Stephanie" className="stephanie-photo"></img>
          </div>
        </div>
      </div>




      <div className="spacing"></div>





    </div>
  );
}

export default App;
