import React, { useState, useEffect }  from 'react'
import './App.css';
import Header from './Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddedCart from './AddedCart/AddedCart';
import Home from './Home';


function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const data = [
    {Id: 1, img: 'https://i1.adis.ws/i/tom_ford/J1100T-VKR_BIR_APPENDGRID?$listing_grid$', title: 'Jago Top Sneaker', price: 9900 },
    {Id: 2, img: 'https://i1.adis.ws/i/tom_ford/J1100T-VKR_RON_APPENDGRID?$listing_grid$' , title: 'Multicolor Sneaker'  , price: 7900 },
    {Id: 3, img: 'https://i1.adis.ws/i/tom_ford/J1100T-TOF002_U9001_APPENDGRID?$listing_grid$' , title: 'Tom Ford Jago' , price: 7500 },
    {Id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgtmob6YPQpVE4ygZNOH8CBu379yFKm7xwHpX-yx64PgW2G1F-IFttgEhWb8sSyvILHc&usqp=CAU' , title: 'Cambridge Suede Sneaker'  , price: 8500 },
    {Id: 5, img: 'https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4000_APPENDGRID?$listing_grid$' , title: 'Low Top Sneaker'  , price: 8480 },
    {Id: 6, img: 'https://i1.adis.ws/i/tom_ford/J1265T-TOF003_C8204_APPENDGRID?$mobilepdp$' , title: 'Multicolor Sneaker' , price: 7200 },
    {Id: 7, img: 'https://kg-static-cache.s3.amazonaws.com/catalog/product/cache/thumbnail/343x343/8/4/8423518609.jpg' , title: 'James Eco Sneaker' , price: 9800 },
    {Id: 8, img: 'https://i1.adis.ws/i/tom_ford/J1262T-LCL116_U3071_APPENDGRID?$listing_grid$' , title: 'James Low Top' , price: 9700 },
    {Id: 9, img: 'https://image.harrods.com/tom-ford-leather-jago-sneakers_15050970_25203997_2048.jpg' , title: 'Leather Jago Sneaker' , price: 15900  },
    {Id: 10, img: 'https://www.luxuryfashionstores.ch/_CMS/repository/Normal/134-J1212T-LNL005-C7200-CAMEL-ORANGE-TOM-FORD-SNEAKERS-1.jpg' , title: "J1212T"  , price: 10700},
    {Id: 11, img: 'https://www.luxuryfashionstores.sk/_CMS/repository/Normal/136-J1232T-LCL133-U1018-CREAM-TOM-FORD-SNEAKERS-1.jpg' , title: 'J1232T' , price: 17000 },
    {Id: 12, img: 'https://i1.adis.ws/i/tom_ford/J1100T-VKR_RON_APPENDGRID?$listing_grid$' , title: 'Barrikade Sneaker' , price: 12000 },
];
useEffect(() => {
   const savedCard = JSON.parse(
     localStorage.getItem('react-shop-card'));

  if (savedCard) {
    setCart(savedCard)
  }
}, [])

useEffect(() => {
   const savedPricec = JSON.parse(
     localStorage.getItem('react-shop-pricec'));

  if(savedPricec) {
    setPrice(savedPricec)
  }
},[])

useEffect(() => {
  localStorage.setItem('react-shop-card',
   JSON.stringify(cart));
}, [cart])

useEffect(() => {
  localStorage.setItem('react-shop-pricec',
   JSON.stringify(price));
}, [price])






const onAddCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    setPrice(price + item.price);  
   
}

const setTotal = (cart) => {
   if (price !== 0) {
    setPrice(price - cart.price) 
   } 
  }

const onDeleteCart = (id) => {
   const newCarts = cart.filter((c) => c.Id !== id)
   setCart(newCarts);
}
  return (
    <Router>
      <div className="wrapper">
     <Header cartLength={cart} />
     <Switch>
        <Route exact path='/'>
           <Home onAddCart={onAddCart} data={data} />
        </Route>
        <Route exact path='/addedCart'>
          <AddedCart setTotal={setTotal} total={price} handleDelete={onDeleteCart} cart={cart} />
        </Route> 
     </Switch>
    </div>
    </Router>
  );
}

export default App;

