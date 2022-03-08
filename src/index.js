import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// pour creer le store redux
import { createStore } from "redux";
// Et le provider pour apporter 
import { Provider } from "react-redux";

// on a creer un reducer qu'on importe pour mettre dans le store
import CounterReducer from "./Reducer/CounterReducer";

// autre reducer
import AddCartReducer from "./Reducer/AddCartReducer";


// creation store plus mettre un reducer

// const Store = createStore(CounterReducer);
const Store = createStore(AddCartReducer);



ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
