import React from 'react'
import { CartCard } from './CartStyles'
import { ImBin } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import * as cartActions from "../../redux/cart/cart-actions";


const CartItem = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <CartCard>
        <img src="https://i.ibb.co/SrVPtcz/mouse1.png" alt="" />
        <h4>Mouse ZN-900</h4>
        <div>
            <button onClick={() => dispatch(cartActions.clearCart())} disabled={!cartItems.length}><ImBin /></button>
            <p>1</p>
            <button>+</button>
        </div>
        <p>$900</p>
    </CartCard>
  )
}

export default CartItem