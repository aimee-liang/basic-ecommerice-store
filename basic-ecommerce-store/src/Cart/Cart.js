import React from "react"
import CardInfo from "./CardInfo"

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {/* if there is nothing in the cart, display "Your cart is empty" */}
            {cartTotal.length ? <p>Your cart is empty</p> : null}
            {/* display all items */}
                {/* and possibly increase total quantity */}
            {/* calculate total */}

            <CardInfo/>
        </div>
    )
}

export default Cart