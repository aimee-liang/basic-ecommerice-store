import './App.css';
import React, {useState} from "react"
// import Logo from "Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const App = () => {

  const [total, setTotal] = useState([]) /* should this be an object and not an array? */

  /* is each item in array an object? */

  const updateTotal = (item) => setTotal([...item]) /* have count included? */

  return (
    <>
      {/* <Logo /> */}
      <Stock updateTotal={updateTotal}/>
      {/* <Cart cartTotal={setTotal}/> */}
      <ShoppingCartIcon onClick = {()=> <Cart cartTotal={setTotal}/> } />
    </>
  );
}

export default App;
