import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Card.css'
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const CartItem = ({item, handleClick}) => {
    
   
    return (
      <div className="card" style={{width: '21rem', height: '370px', margin: '10px'}}>
      <img style={{width: '50%', marginLeft: '90px'}} src={item.img} className="card-img-top" alt="/" />
      <div className="card-body">
        <h5 className="card-title"> price  <p> {item.price} $ </p> </h5>
        <p className="card-text">{item.title}</p>
        <IconButton aria-label='Add to Cart' onClick={() => handleClick(item)} >
            <AddShoppingCart />
        </IconButton>
      </div>
    </div>
    );
}

export default CartItem;

