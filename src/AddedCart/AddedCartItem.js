import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.css';
import './AddedCart.css'


const AddedCartItem = ({cart, handleDelete, setTotal}) => {
    return (
        <div key={cart.Id} className="card" style={{width: '21rem', height: '370px', margin: '10px'}}>
      <img style={{width: '50%', marginLeft: '90px'}} src={cart.img} className="card-img-top" alt="/" />
      <div className="card-body">
        <h5 className="card-title"> price <h3>  {cart.price} $ </h3> </h5>
        <p className="card-text">{cart.title}</p>
        <button href="/" className="btn btn-danger" onClick={() => {
            handleDelete(cart.Id)
            setTotal(cart)
            }}>Remove</button>
      </div>
    </div>
    )
}

export default AddedCartItem;
