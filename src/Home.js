import React from 'react'
import CardList from './Card/CardList'
import Slideshow from './Slider/Slideshow'

const Home = ({onAddCart, data}) => {
    return (
        <div>
           <Slideshow />
           <CardList handleClick={onAddCart} item={data} />
        </div>
    )
}

export default Home
