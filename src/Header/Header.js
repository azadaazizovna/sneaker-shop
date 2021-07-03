import React from 'react'
import './Header.css'
import logo from './logo.jpg'
import { ShoppingCart } from '@material-ui/icons'
import { Badge, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = ({cartLength}) => {
    return (
        <header>
       
        <div className='headerLeft'>
          <img src={logo} alt='Tom Ford' />
          <Link className='text' to = '/' >
            <h3>|Store</h3>
          </Link>
        </div>

        <ul className='headerRight'>
          <IconButton component={Link} to='/addedCart'aria-label='Show cart item' color='inherit' >
            <Badge badgeContent={cartLength.length} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </ul>

      </header>
    )
}

export default Header