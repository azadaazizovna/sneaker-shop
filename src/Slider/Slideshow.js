import React from 'react'
import './Slider.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


const Slideshow = () => {

    return (
        <div className='main-container'>
            <div className='text'>
                    <h1>WELCOME TO TOM FORD MEN</h1>
                    <p> Best Tom Ford Sneakers </p>
            </div>
            <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <img src='https://i1.adis.ws/i/tom_ford/J1265T-TOF003_C8204_APPENDGRID?$mobilepdp$' alt='/' />
            </div>
            <div className="each-slide">
              <img src='https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4000_APPENDGRID?$listing_grid$' alt='/' />
            </div>
            <div className="each-slide">
              < img src='https://i1.adis.ws/i/tom_ford/J1100T-VKR_BIR_APPENDGRID?$listing_grid$' alt='/' />
            </div>
            <div className='each-slide'>
                <img src='https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4006_APPENDGRID?$listing_grid$' alt='/' />
            </div>
            <div className='each-slide'>
                <img src='https://i1.adis.ws/i/tom_ford/J1100T-VKR_RON_APPENDGRID?$listing_grid$' alt='/' />
            </div>
            <div className='each-slide'>
                <img src='https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U5006_APPENDGRID?$mobilepdp$' alt='/' />
            </div>
          </Slide>
        </div>
        </div>
      )
}

export default Slideshow
