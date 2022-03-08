import { useState } from "react";
// pour avoir acces au donnees du store et apres on utilise le dispatch pour recuperer les switch case
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  const count = useSelector((state) => state.count);
  
  const cart = useSelector((state)=> state.cart)

  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const AddToCartFunc = () => {
      dispatch({
          type: "ADDCART",
          payload: cartData

      })
  }




  return (
    <div>
      <h1>Les données : {count}</h1>

      <h1>Votre panier : {cart}</h1>

      {/* <button onClick={incrFunc}>+1</button> */}
      {/* <button onClick={decrFunc}>-1</button> */}

      <input 
      type="number"
      value={cartData}
      onInput={e => setCartData(e.target.value)}
      />

     <br />
      <button
      onClick={AddToCartFunc}
      >Ajouter au panier</button>
    </div>
  );
}
