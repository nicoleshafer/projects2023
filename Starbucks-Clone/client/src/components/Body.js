import React from 'react';
import summer from "../body-images/summer-img.jpg"
import sweets from "../body-images/sweets.jpg"

const Body = () => {
    return (
        <div>
            <div className='container'>
                <div className='bodyOuterBox boxOne'>
                    <div>
                        <img src={summer} alt='fraps' className='bodyImage'></img>
                    </div>
                    <div className='boxText'>
                        <h2>Turn this summer<br/>up</h2>
                        <p>
                        Here’s to the new Chocolate Java Mint 
                        <br />Frappuccino® blended beverage and classic 
                        <br/>Caramel Ribbon Crunch Frappuccino®
                        <br/> blended beverage.
                        </p>
                    </div>
                </div>

                <div className='bodyOuterBox boxTwo'>
                <div className='boxText'>
                    <h2>Sweetest of the hive</h2>
                </div>
                    <div>
                        <img src={sweets} alt="pops" className='bodyImage'></img>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Body;
