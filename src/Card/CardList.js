import React from 'react'
import CartItem from './CartItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Card.css'

const CardList = ({item, handleClick}) => {

    return (
        <div className='cart-container'>
            {item.map((item) => (
                <CartItem key={item.Id} handleClick={handleClick} item={item} />
            ))}
        </div>
    )
}

export default CardList
