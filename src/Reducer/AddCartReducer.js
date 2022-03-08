// de base il faut un state initial

const INITIAL_STATE = {
  cart: 0,
};
// on creer une fonction avec le state qui à le state de base(initial) et ensuite des actions à effectuer
function AddCartReducer(state = INITIAL_STATE, action) {
  // on fait un switch et on dit en fonction du type d'action et on énumère les différents cas
  switch (action.type) {

    case "ADDCART": {
      return {
        ...state,
        cart: action.payload
      };
    }
  }

  return state;
}

export default AddCartReducer;
