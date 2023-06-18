import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import trip1 from "../images/tripWizard1.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import trip2 from "../images/tripwizard2.png"
import trip3 from "../images/tripwizard3.png"
const Carousel = () => {
    return (
        <div>
            
            <CarouselProvider
                                    // naturalSlideWidth={100}
                                    // naturalSlideHeight={300}
                                    className='carousel'
                                    totalSlides={3}
                                >
                                    <Slider>
                                        <Slide index={0}>
                                        <img src={trip1} alt="project"/>
                                        </Slide>
                                        <Slide index={1}>
                                        <img src={trip2} alt="project"/>
                                        </Slide>
                                        <Slide index={2}>
                                        <img src={trip3} alt="project"/>
                                        </Slide>
                                    </Slider>
                                    <ButtonBack className='carouselBtn'>Back</ButtonBack>
                                    <ButtonNext>Next</ButtonNext>
                                </CarouselProvider>
        </div>
    );
}

export default Carousel;
