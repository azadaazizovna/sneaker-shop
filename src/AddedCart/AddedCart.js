import React  from 'react'
import './AddedCart.css'
import AddedCartItem from './AddedCartItem';


const AddedCart = ({ setTotal, total, cart, handleDelete }) => {
    

    
    return (
        <div className='cart'>
             <div className='cart-container'>
             {cart.map((cart) => (
                  <AddedCartItem setTotal={setTotal} handleDelete={handleDelete} cart={cart} />
             ))}
             </div>

           <div className='total-container'>
               <h1>Your Subtotal: {total} $ </h1>
           </div>
        </div>
    )
}

export default AddedCart;
