import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import orlando from '../Images/orlando.jpg'
import arrow from '../Images/arrow.png'
import unnamed from '../Images/unnamed.png'
import Popular from './Popular';

const Home = () => {
  const navigate= useNavigate()

  const homeLogo = (e) => {
    navigate('/')
  }
  
  const downBtn = (e) => {
    navigate('/popular')
  }

  return (
    <div className='Home'>

      <nav>
        <div className="img-container">
          <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo}/>
        </div>
        <ul>
          <li><Link to="/popular" element={< Popular />} className='link'>Explore</Link></li>
        <li><Link to='/about' className='link'>About</Link></li>
        <li><Link to='contact' className='link'>Contact</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="/popular" element={< Popular />}><img className="main-img" src={orlando} alt="Wizarding World" /></Link>
        <div className='text-overlay'>
          <h1 className='img-header'>EXPLORE THE MAGIC</h1>
          <hr />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" className='arrow' onClick={downBtn}>
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
