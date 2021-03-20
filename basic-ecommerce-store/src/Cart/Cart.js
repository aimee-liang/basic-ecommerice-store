import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])

    const calculateTotal = ([...items]) => {
        return items["price"].reduce((sum, value) => {return sum + value}, 0)
    }

    const clearCart = () => {
        setCart([cart.length === 0])
    }

    /* const increaseQuantity = () => {
        
    }

    */

    /* decrease quantity */
    // const decreaseQuantity = () => {

    // }

    const renderItems = props.total.map((item, index) => <CartItem key={index} item={item} />)

    return (
        <>
            <div className="cart">
                {props.cartTotal.length ? <p>Your cart is empty </p> : 
                    <>
                    <h2>Your Cart</h2>
                        {renderItems}
                        <h2>Total: ${calculateTotal()}</h2>
                        <CardInfo/>
                        <button onClick={clearCart}>Clear cart</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart